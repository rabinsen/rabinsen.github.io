
/* Question 3 */
window.onload = function(){
    var element1 = document.getElementById("alert1");
    element1.onclick = function(){
        setTimeout(booyah1, 2000);
        document.getElementById("showAlert1").innerHTML = "Wait for Alert";
    }

    function booyah1(){
        alert("BOOYAH!");
    }

    var element2 = document.getElementById("alert2");
    element2.onclick = function(){
        setTimeout(booyah2(), 2000);
        document.getElementById("showAlert2").innerHTML = "Wait for Alert";
    }

    function booyah2(){
        return function(){
            alert("BOOYAH!");
        }
    }
}


  