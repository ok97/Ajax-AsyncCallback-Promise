
/* UC1:- Demonstrate Async nature of JavaScript.
         - Note: It is similar to Main thread invoking another Activity which are processed by child Thread.
         - Run the JS code using Node Compiler. 
*/

function showTime(){
    const date= new Date();
    return date.getHours()+" Hrs "+date.getMinutes()+" Mins "+date.getSeconds()+" Secs"
}
function showSessionExpire(){
    console.log("Activity B has been expired at "+showTime());
}
console.log("Activity A Triggering Activity B at "+showTime());
setTimeout(showSessionExpire,5000);
console.log("Activity B Triggered at "+showTime()+" will execute after 5seconds");