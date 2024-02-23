var target_milli_seconds = new Date("Feb 26, 2024 11:30").getTime();
function timer() {
   var now_milli_seconds = new Date().getTime();
   var remaining_seconds = Math.floor( (target_milli_seconds - now_milli_seconds ) / 1000);

   var day = Math.floor(remaining_seconds / (3600 * 24));
   var hours = Math.floor((remaining_seconds % (3600 * 24)) / 3600);
   var mins = Math.floor((remaining_seconds % 3600) / 60);
   var secs = Math.floor(remaining_seconds % 60);

   document.querySelector("#days").innerHTML = day;
   document.querySelector("#hours").innerHTML = hours;
   document.querySelector("#mins").innerHTML = mins;
   document.querySelector("#secs").innerHTML = secs;
}

setInterval(timer, 1000);