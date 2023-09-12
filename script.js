var myVar = setInterval(dayOfWeek, 1000);

function dayOfWeek(){
    var d = new Date();
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    document.getElementById("day-of-week").innerHTML = days[d.getDay()];
}
// Milliseconds time
var myVar = setInterval(Millisecc, 900);

function Millisecc(){
    var d = new Date();
    document.getElementById("milli-sec").innerHTML = d.getMilliseconds();
}

