/* -- Created by Tivotal -- */

function getTimeRemaining(et) {
  var t = Date.parse(et) - Date.parse(new Date());

  var seconds = Math.floor((t / 1000) % 60);

  var minutes = Math.floor((t / 1000 / 60) % 60);

  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);

  var days = Math.floor(t / (1000 * 60 * 60 * 24));

  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function initializeTimer(className, endTime) {
  var clock = document.querySelector(`.${className}`);

  var daySpan = clock.querySelector(".days");
  var hourSpan = clock.querySelector(".hours");
  var minSpan = clock.querySelector(".minutes");
  var secSpan = clock.querySelector(".seconds");

  function updateTime() {
    var t = getTimeRemaining(endTime);

    daySpan.innerHTML = t.days;
    hourSpan.innerHTML = ("0" + t.hours).slice(-2);
    minSpan.innerHTML = ("0" + t.minutes).slice(-2);
    secSpan.innerHTML = ("0" + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeInterval);
    }
  }

  updateTime();
  var timeInterval = setInterval(updateTime, 1000);
}

var deadLine = new Date(Date.parse(new Date()) + 9 * 24 * 60 * 60 * 1000);

initializeTimer("wrapper", deadLine);
