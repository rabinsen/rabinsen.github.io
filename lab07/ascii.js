"use strict";
window.onload = function () {
    document.getElementById("stop").disabled = true;
    document.getElementById("anim").onchange = function () {
        var element = document.getElementById("anim").value;
        document.getElementById("textArea").value = ANIMATIONS[element];
    }
    var sequences;
    var textElement;
    var index = 0;
    var timer;
    var flag = 0;
    document.getElementById("start").onclick = function () {
        flag = 1;
        document.getElementById("stop").disabled = false;
        textElement = document.getElementById("textArea").value;
        sequences = textElement.split("=====\n");
        /* console.log(sequences); */
        if (timer) {
            clearInterval(timer);
        }
        timer = setInterval(animations, 250);
    }
    function animations() {
        if (index >= sequences.length) { index = 0 }
        document.getElementById("textArea").value = sequences[index++];
    }
    document.getElementById("stop").onclick = function () {
        document.getElementById("stop").disabled = true;
        index = 0;
        flag = 0;
        if (timer){
            clearInterval(timer);
        }
        document.getElementById("textArea").value = textElement;
        document.getElementById("textArea").style.fontSize = "12px";
        document.getElementById("turbo").checked = false;
    }
    document.getElementById("size").onchange = function () {
        
        var option = document.getElementById("size").value;
        document.getElementById("textArea").style.fontSize = option;
    }
    document.getElementById("turbo").onclick = function () {
        clearInterval(timer);
        if(flag == 1){
            if (document.getElementById("turbo").checked == true) {
                timer = setInterval(animations, 50);
            } else {
                timer = setInterval(animations, 250);
            }
        }
    }
}

