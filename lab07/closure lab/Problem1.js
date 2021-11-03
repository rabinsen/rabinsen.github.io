window.onload = function () {
    var clickEvent = document.getElementById("click");
    clickEvent.onclick = displayMsg2;
}
timer = null;
function displayMsg2() {
    if (timer === null) {
        timer = setInterval(rudyTimer, 1000);
    } else {
        clearInterval(timer);
        timer = null;
    }
}
function rudyTimer() {
    var rudyTimer = (function (str) {
        document.getElementById("output").innerHTML += " Rudy!";
    }(" Rudy!"))
}


