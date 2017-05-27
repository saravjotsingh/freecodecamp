$(document).ready(function(){
    
var stimer = 5;
var btimer = 5;
var br;
    $("#plusb").click(function(){
        console.log(btimer);
    btimer++;
    if(btimer>59){
        btimer=0;
    }
    $("#breaktimer").html(btimer);
    });

    $("#minusb").click(function(){
    btimer--;
    if(btimer<0){
        btimer=59 ;
    }
        
    $("#breaktimer").html(btimer);
    });
    
    
    $('#rst').click(function(){
        reset();
    })
    
    $('#start').click(function(){
        console.log("hello");
        var counter = setInterval(timer,100);
        stimer = stimer*60;
        
        function timer(){
            //console.log(stimer);
            //console.log('hello');
            stimer--;
            
            
            $('#timetype').html("Session Timer");
            console.log('in session time');
                if(stimer===0){
                
              clearInterval(counter);
             br = setInterval(session,100)
             btimer= btimer*60;
      
            }
            
            if(stimer%60>=10){
            
            
                $('.output').html(Math.floor(stimer/60) +':' + stimer%60);        
            }
            else{

                
                $('.output').html(Math.floor(stimer/60) +':' + '0'+ stimer%60);
            }
            
            
        
           
        }
        
        function session(){
            console.log('in break time');
            btimer--;
            $('#timetype').html("Break timer");
                if(btimer===0){
                clearInterval(br);
                alert('time over');
                reset();
            }
            
            if(btimer%60>=10){
              
                $('.output').html(Math.floor(btimer/60) +':' + btimer%60);        
            }
            else{
                
                $('.output').html(Math.floor(btimer/60) +':' + '0'+ btimer%60);
            }
            
            //$('.output').html(btimer);
        }
    });
    
    function reset(){
        console.log("in reset");
        stimer = 5;
        btimer = 5;
        clearInterval(counter);
        clearInterval(br);
        $('#breaktimer').html(5);
        $('#sessiontimer').html(5);
    }


    
    
    $("#pluss").click(function(){
    stimer++;
        console.log(stimer);
    if(stimer>59){
        stimer=0;
    }
    $("#sessiontimer").html(stimer);
    });

    $("#minuss").click(function(){
    stimer--;
    if(stimer<0){
        stimer=59 ;
    }
    $("#sessiontimer").html(stimer);
    });



});
