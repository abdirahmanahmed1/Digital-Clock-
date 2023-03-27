const hour =document.getElementById('hour')
const minute=document.getElementById('minute')
const seond=document.getElementById('second')
const clock = setInterval(function time() {
    let DateToday = new Date();
    // console.log(DateToday)
    let hr = DateToday.getHours();
    let min = DateToday.getMinutes();
    let sec = DateToday.getSeconds();
console.log(hr,min,sec)
    if (hr < 10) {
        hr = '0' + hr
    }
    if (min < 10) {
        min = '0' + min
    }
    if (sec < 10) {
        sec = '0' + sec
    }
   
  hour.textContent=hr;
  minute.textContent=min;
  seond.textContent=sec;  
}, 1000)
