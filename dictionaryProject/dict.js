$(document).ready(function(){
    $("#search").click(function(){
        $w = $("#word").val();
        $.ajax("/search", {method: "POST", 
        data : { word: $w}})
                                .done(successFunction);                          
    });
    function successFunction(data){

    }
}); 