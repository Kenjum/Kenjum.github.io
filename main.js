
function main(){
    //Default All is on
    var ADAG = [true,false,false,false];
    //Default All is on
    $("#all").addClass("buttonON");

    //Mouse Behaviors with the buttons
    pick();
    $(".button").mouseup(function(){
        $(this).removeClass("buttonDown");
        $(this).addClass("buttonON");
    }) 
    $(".button").mouseover(function(){
        $(this).addClass("buttonON");
    })    
    $(".button").mouseout(function(){
        $(this).removeClass("buttonDown");
        checkON();
    })


function pick(){
    $(".button").mousedown(function(){
        if(this.id=="all"){
        ADAG[0]=true;
        ADAG[1]=false;
        ADAG[2]=false;
        ADAG[3]=false;
        $("#all").addClass("buttonON");
        $("#drawings").removeClass("buttonON");
        $("#animation").removeClass("buttonON");
        $("#games").removeClass("buttonON");
        }
        if(this.id=="drawings"){
        ADAG[0]=false;
        ADAG[1]=true;
        ADAG[2]=false;
        ADAG[3]=false;
        $("#all").removeClass("buttonON");
        $("#drawings").addClass("buttonON");
        $("#animation").removeClass("buttonON");
        $("#games").removeClass("buttonON");
        }
        if(this.id=="animation"){
        ADAG[0]=false;
        ADAG[1]=false;
        ADAG[2]=true;
        ADAG[3]=false;
        $("#all").removeClass("buttonON");
        $("#drawings").removeClass("buttonON");
        $("#animation").addClass("buttonON");
        $("#games").removeClass("buttonON");
        }
        if(this.id=="games"){
        ADAG[0]=false;
        ADAG[1]=false;
        ADAG[2]=false;
        ADAG[3]=true;
        $("#all").removeClass("buttonON");
        $("#drawings").removeClass("buttonON");
        $("#animation").removeClass("buttonON");
        $("#games").addClass("buttonON");
        }
        $(this).removeClass("buttonON");
        $(this).addClass("buttonDown");
    })
}
    
function checkON(){
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
    }
}
$(document).ready(main);
