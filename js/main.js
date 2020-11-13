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

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2020, 10, 20, 20, 0, 0);
let futureDate = new Date(tempYear, tempMonth, tempDay + 1, 20, 0, 0);

// giveaway.textContent = `giveaway ends on ${futureDate}`;

const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
const month = months[futureDate.getMonth()];
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = formatSingleDigit(futureDate.getMinutes());

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year}, ${hours}:${minutes} hours.`;

// future time in ms
const futureTime = futureDate.getTime();


function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // calculate all values
  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);
  // set values array
  const values = [days, hours, minutes, seconds];


  

  items.forEach(function (item, index) {
    item.innerHTML = formatSingleDigit(values[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, you'r too late.</h4>`;
  }
}

// countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();

function formatSingleDigit(item) {
  if (item < 10) {
    return item = `0${item}`;
  }
  return item;
}