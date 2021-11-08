$(document).ready(function(){
    $("#btn1").click(function(){
        $("li").each(function(idx, e){
            $(e).css('color', 'yellow');
        });
    });

    $("#btn2").click(function(){
        $("li").each(function(){
            $(this).css('color', 'yellow');
        });
    });

    $("#btn3").click(function(){
        $("li").each(function(idx){
            $(this).css('color', 'yellow');
        });
    });


   
    $("div ul").css('color', 'blue');

    $("body").append("<div><h1>JQuery Core</h1></div>")
    
});