window.addEventListener("DOMContentLoaded", () => {
  function Timer() {
    const dateTime = new Date();
    const hours = dateTime.getHours();
    const minute = dateTime.getMinutes();
    const second = dateTime.getSeconds();

    function getZero (num){
      if(num >= 0 && num < 10){
        return `0${num}`
      }else{
        return num
      }
    }

    document.querySelector("#timer__hour").innerHTML = getZero(hours);
    document.querySelector("#timer__minute").innerHTML = getZero(minute);
    document.querySelector("#timer__second").innerHTML = getZero(second);
  }
  setInterval(Timer, 10)
});
