window.onload = function () {
    var clickEvent = document.getElementById("click");
    clickEvent.onclick = function () {
        timer = null;
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
}


