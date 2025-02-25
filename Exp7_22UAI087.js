$(document).ready(function(){
    $(".hide").click(function(){
        $("h1").hide();
    });


    $(".show").click(function(){
        $("h1").show();
    });

    $(".slideup").click(function(){
        $("h1").slideUp();
    });

    $(".slidedown").click(function(){
        $("h1").slideDown();
    });

    $(".dbclick").dblclick(function(){
        $("h1").hide();
    });

    $(".mouseover").mouseenter(function(){
        $("h1").hide();
    });

    $(".ajax").click(function(){
        $("h1").load("akash.txt");
    });

});


  