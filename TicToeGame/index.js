$(document).ready(function(){
    
    var turn = 'X';
    var computersTurn = 'O';
    var turns = ['$','$','$','$','$','$','$','$','$'];
    var gameOn = false;
    var count = 0;
    
    $('#turnx').click(function(){
        turn = 'X';
        computersTurn = 'O';
        
        $('#turnx').removeClass('btn btn-primary');
        $('#turno').addClass('btn btn-primary');
        reset();
    });    
   
    $('#turno').click(function(){
        turn = 'O';
        computersTurn = 'X';
        
        $('#turno').removeClass('btn btn-primary');
        $('#turnx').addClass('btn btn-primary');
        reset();
    });   
    
        function playerTurn(turn,id){
            var spottaken = $("#"+id).text();
            if(spottaken==="$"){
                count++;
                turns[id] = turn;
                $("#"+id).text(turn);
                winCondition(turns,turn);
                if(gameOn===false){
                    computerTurn();
                    winCondition(turns,computersTurn);
                    
                }
            }
        }
    
    function computerTurn(){
        var taken=false;
        while(taken===false && count !==5){  
            var computersMove = Math.floor(Math.random()*9)+1;
           
            var move = $("#"+computersMove).text();
            if(move==="$"){
                $("#"+computersMove).text(computersTurn);
                taken=true;
                turns[computersMove]=computersTurn;
            }
        }
    }    
    
        function winCondition(array,currentArray){
            if(array[1]===currentArray && array[2]===currentArray && array[3]===currentArray){
                gameOn=true;
                reset();
                alert("player"+ currentArray + "wins on 1,2,3");
            }
            else if(array[1]===currentArray && array[4]===currentArray && array[7]===currentArray){
                gameOn=true;
                reset();
                alert("player"+ currentArray + "wins on 1,4,7 positon");
            }
            else if(array[1]===currentArray && array[5]===currentArray && array[9]===currentArray){
                gameOn=true;
                reset();
                alert("player"+ currentArray + "wins on 1,5,9 position");
            }
            else if(array[4]===currentArray && array[5]===currentArray && array[6]===currentArray){
                gameOn=true;
                reset();
                alert("player"+ currentArray + "wins on 4,5,6 position");
            }
            else if(array[7]===currentArray && array[8]===currentArray && array[9]===currentArray){
                gameOn=true;
                reset();
                alert("player"+ currentArray + "wins on 7,8,9 position");
            }
            else if(array[2]===currentArray && array[5]===currentArray && array[8]===currentArray){
                gameOn=true;
                reset();
                alert("player"+ currentArray + "wins on 2,5,8 position");
            }
            else if(array[3]===currentArray && array[5]===currentArray && array[7]===currentArray){
                gameOn=true;
                reset();
                alert("player"+ currentArray + "wins on 3,5,7");
            }
            else if(array[3]===currentArray && array[6]===currentArray && array[9]===currentArray){
                gameOn=true;
                reset();
                alert("player"+ currentArray + "wins on 3,6,9");
            }
            else {
                gameOn=false;
            }
        }
   
    $('.tic').click(function(){
        var slot = $(this).attr('id');
        playerTurn(turn,slot);

    });
    
    $("#res").click(function(){
        reset();
    })
    
    function reset(){
        turns = ['$','$','$','$','$','$','$','$','$'];
        count = 0;
        $(".tic").text("$");
        gameOn=false;
    }
    
    
    
});