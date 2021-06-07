/* UC4:- Create a simple html file to test the REST services with JSON Server using Promise.
         - Create http_services.js file and copy the Ajax Promise Function to it.
         - Instead of setting onreadystatechange listener we will set onload and onerror listener
         - Call the Promise function from the test services html and populate the result in the html div element
         - EmpDB.Json File  
*/

function makeServiceCall(methodType, url, async = true, data = null) {
    return new Promise(function (resolve, reject) {
       let xhr = new XMLHttpRequest();
       xhr.onload = function(){
          console.log(methodType+" State Changed Called. Ready State: "+
                      xhr.readyState+" Status:"+xhr.status);
          if (xhr.status.toString().match('^[2][0-9]{2}$')) {
             resolve(xhr.responseText);
          } else if (xhr.status.toString().match('^[4,5][0-9]{2}$')) {
             reject({
                status: xhr.status,
                statusText: xhr.statusText
             });
             console.log("XHR Failed");
          }
       }
       xhr.onerror = function () {
         reject({
             status: this.status,
             statusText: xhttp.statusText
         });
       };
       xhr.open(methodType, url, async);
       if (data) {
          console.log(JSON.stringify(data));
          xhr.setRequestHeader("Content-Type", "application/json");
          xhr.send(JSON.stringify(data));
       } else xhr.send();
       console.log(methodType+" request sent to the server");
    });
 }