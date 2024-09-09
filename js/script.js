let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let ampm = document.getElementById("ampm");

function clock() {
  let date = new Date();

  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let mn = "AM";

  if (h > 12) {
    h = h - 12;
    mn = "PM";
  }

  setTimeout(() => {
    clock();
  }, 1000);
  hours.innerHTML = h < 10 ? `0${h}` : h;
  minutes.innerHTML = m < 10 ? `0${m}` : m;
  seconds.innerHTML = s < 10 ? `0${s}` : s;
  ampm.innerHTML = mn;
}
clock();
