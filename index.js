let now = new Date()
console.log(now) 
let selectedDate = new Date('2017-01-26')
console.log(selectedDate)
let date = new Date(2011, 0, 1, 2, 3, 4, 567)
console.log(date) 


let selectTime = new Date();
let hour = "";
let minute = "";
let seconds = "";

let days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Mei",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

let dateToday = selectTime.getDate();
let dayNow = days[selectTime.getDay()];
let monthNow = months[selectTime.getMonth()];
let yearNow = selectTime.getFullYear();
let hourNow =
  hour +
  selectTime
    .getHours()
    .toString()
    .padStart(2, "0");
let minuteNow =
  minute +
  selectTime
    .getMinutes()
    .toString()
    .padStart(2, "0");
let secondsNow =
  seconds +
  selectTime
    .getSeconds()
    .toString()
    .padStart(2, "0");

console.log(`Hari ini ${dayNow}, ${dateToday} ${monthNow} ${yearNow}`);
alert(`Hari ini ${dayNow}, ${dateToday} ${monthNow} ${yearNow}`)
console.log(`Sekarang Pukul ${hourNow}:${minuteNow}:${secondsNow} WIB`);
