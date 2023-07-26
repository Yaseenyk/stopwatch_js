let [hours,minutes,seconds] = [0,0,0];
let time = document.getElementById('stopwatch-hms');
// let timerr = document.querySelector("timer");
console.log(time)
let timenew = null;

function starting(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes==60){
            minutes=0;
            hours++;
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    time.innerHTML = h + ":"+m+":"+ s;
}

function startingwatch(){
    if(timenew!=null){
        clearInterval(timenew);
    }
    timenew = setInterval(starting,1000);

}
function stopTheWatch(){
    clearInterval(timenew);
}

function resetingwatch(){
    clearInterval(timenew);
    [hours,minutes,seconds] = [0,0,0];
    time.innerHTML = "00:00:00";
}