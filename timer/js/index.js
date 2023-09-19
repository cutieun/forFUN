const btnStart = document.querySelector(".btn-start");
const btnReset = document.querySelector(".btn-reset");
let hour = 0;
let min = 0;
let sec = 0;
let timer = 0;

btnStart.addEventListener("click", () => {
    hour = document.querySelector(".hrs").value;
    min = document.querySelector(".mins").value;
    sec = document.querySelector(".sec").value;
    
    timer = setInterval(countTimer, 1000);
    console.log(timer);
})

btnReset.addEventListener("click", () => {
    clearTimer(timer);
});

function countTimer (obj) {
console.log(hour, min, sec, timer);
  
  if(sec > 0){
    sec--;
    document.querySelector(".sec").value = sec;    
  } else {
    if(min > 0){
        min--;
        sec = 59;
        document.querySelector(".mins").value = min || "00";
        document.querySelector(".sec").value = sec;
    } else {
        if(hour > 0){
            hour--;
            min = 59;
            sec = 59;
            document.querySelector(".hrs").value = hour || "00";
            document.querySelector(".mins").value = min;
            document.querySelector(".sec").value = sec;
        } else {
            console.log("타이머 종료");
            clearTimer(timer);
        }
    }
  }
}

function clearTimer(timer) {
  clearInterval(timer);
  document.querySelector(".hrs").value = "00";
  document.querySelector(".mins").value = "00";
  document.querySelector(".sec").value = "00";
}