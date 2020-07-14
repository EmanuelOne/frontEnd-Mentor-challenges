// var increament = 1;
// document.querySelector("h3").classList.toggle("h3");
// var time = d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();

function startTime() {
    var d = new Date();

    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.querySelector("h3").innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 100);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i; }
    return i;
}
// var sec = d.getSeconds();
// while (sec< sec+1){
// document.querySelector("h3").innerHTML = d.toDateString() + "<br>" + time;

// }