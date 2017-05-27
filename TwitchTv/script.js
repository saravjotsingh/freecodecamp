$(document).ready(function(){
    
var channels = ["ESL_SC2", "OgamingSC2", "CRETETION", "FREECODECAMP", "STORBECK", "HABATHCX", "ROBOTCALEB", "NOOBS2NINJAS"];
     var img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTJ0QnoX60TpuftgL24Ug6iuSnwk7Gwa4OAJP6H_Hvovf_hQFJ'

     for(var i=0;i<channels.length;i++){
         x = channels[i];  
         call(x);
     }
function call(x){        
    
$.ajax({
    type:"GET",
    url:"https://api.twitch.tv/kraken/streams/" + x,
    headers:{
        "Client-ID":"5a71jfvu06a7t0j7a9d8afifgcbq6s"
    },
    success:function(data){
        
        console.log(data);
        if(data.stream){
        
        $('.result').append('<div class="row">' +'<div class="col-md-4">' + '<img src='+data.stream.channel.logo +'>' + '</div>' + '<div class="col-md-4">' + '<a href="https://www.twitch.tv/'+ data.stream.channel.display_name + '">'+ data.stream.channel.display_name +'</a>' + '</div>' + '<div class="col-md-4">' + 'ONLINE' + '</div>' + '</div>' + '<br><br>' )
      
        }
        else{
              console.log(x);
            $('.result').append('<div class="row">' +'<div class="col-md-4">' + '<img src='+ img +'>' + '</div>' + '<div class="col-md-4">' +'<a href="https://www.twitch.tv/'+ x + '">' + x + '</a>' + '</div>' + '<div class="col-md-4">' + 'OFFLINE' + '</div>' + '</div>' + '<br><br>' )
           
        
          
        }
        
       
    }
    
});
}

});