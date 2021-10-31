"use strict";

/* window.onload = function(){
    var element = document.getElementById("decorate");
    element.onclick = function(){
        var text = document.getElementById("textbox").value;
        document.getElementById("output").innerHTML = text;
        var temp = document.getElementById("output");
        temp.style.color = "red";
        temp.style.fontSize = 40 + "px"; 

    }
} */
/* alert("Hello World"); */
window.onload = function () {
    var element = document.getElementById("bigDecoration");
    
    element.onclick = function(){
        setInterval(increaseTextSize, 500);
    }


    /* alert("Hello World"); */
    /* var text = document.getElementById("textbox"); */
    /* text.style.fontSize = 24 + "pt"; */
    /*  var textsize = (text.style.fontSize);
     console.log(textsize); */
    /* textsize += 2;
   
    text.style.fontSize = textsize + "pt";*/

    var check = document.getElementById("checkbling");
    check.onchange = function () {
        var text = document.getElementById("text");
        if (check.checked) {
            text.style.fontWeight = "bold";
            text.style.color = "green";
            text.style.textDecoration = "underline";
            var background = document.getElementById("background");
            background.style.backgroundImage = "url('back.jpeg')"
            background.style.backgroundRepeat = "repeat";
        } else {
            text.style.fontWeight = "normal";
            text.style.color = "black";
            text.style.textDecoration = "none";
            var background = document.getElementById("background");
            background.style.backgroundImage = "none";
        }
    }

    var button2 = document.getElementById("igpay");
    button2.onclick = function(){
        var text = document.getElementById("text").value;
        for(var i=0; i<text.length;){
            if(! isVowel(text[i].toLowerCase())){
                text += text[i];
                
                text = text.substring(1);
               
            }else{
                text += "ay";
                break;
            }
        }
        document.getElementById("text").value = text;
    }

    var button3 = document.getElementById("malkovitch");
    button3.onclick = function(){
        var text = document.getElementById("text").value;

        if(text.length >= 5){
            text = "Malkovich";
        }

        document.getElementById("text").value = text;
    }

}

function increaseTextSize() {
    var text = document.getElementById("text");
    const size = parseInt(getComputedStyle(text).fontSize) * 0.75; /* convert pixels to points*/
    text.style.fontSize = size + 2 + "pt";
}

function isVowel(x){
    return  x == 'a' || x=='e' || x == 'i' || x=='o' || x == 'u';
}



