window.addEventListener("DOMContentLoaded", () => {
  function Timer() {
    const dateTime = new Date();
    const hours = dateTime.getHours();
    const minute = dateTime.getMinutes();
    const second = dateTime.getSeconds();

    document.querySelector("#timer__hour").innerHTML = hours;
    document.querySelector("#timer__minute").innerHTML = minute;
    document.querySelector("#timer__second").innerHTML = second;
  }
  setInterval(Timer, 10)
});
