const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');


let futureDate = new Date(2020, 11, 11, 8, 5, 0);
const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const date = format(futureDate.getDate());
const hours = format(futureDate.getHours());
const minutes = format(futureDate.getMinutes());
const weekday = weekdays[futureDate.getDay()];
const futureTime = futureDate.getTime();

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year}, ${hours}:${minutes} hours.`;

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // calculating values
  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);
  // set values array
  const values = [days, hours, minutes, seconds];

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, you are late.</h4>`;
  }
}
// countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();

function format(item) {
  if (item < 10) {
    return item = `0${item}`;
  }
  return item;
}