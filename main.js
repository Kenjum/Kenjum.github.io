
function main(){
    var ADAG = [true,false,false,false];

    //Default All is on
    $("#all").addClass("buttonON");

    $(".button").mouseover(function(){
        $(this).addClass("buttonON");
    })
    
    
    $(".button").mousedown(function(){
        $(this).removeClass("buttonON");
        $(this).addClass("buttonDown");
    })
    $(".button").mouseup(function(){
        $(this).removeClass("buttonDown");
        $(this).addClass("buttonON");
    })
    
    
    $(".button").mouseout(function(){
        $(this).removeClass("buttonDown");
        if(ADAG[0]!=true){
            $("#all").removeClass("buttonON");
        }
        if(ADAG[1]!=true){
            $("#drawings").removeClass("buttonON");
        }        
        if(ADAG[2]!=true){
            $("#animation").removeClass("buttonON");
        }
        if(ADAG[3]!=true){
            $("#games").removeClass("buttonON");
        }        
    })
}

$(document).ready(main);
