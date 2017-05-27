$(document).ready(function(){
    
$('#searchitem').click(function(){

    var x = $('#text').val();
  
    
     $.ajax({
	    url: 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=' + x,
	    dataType: 'jsonp',
	    type: 'POST',
	    headers: {
	      'Api-User-Agent': 'Example/1.0'
	    },
         success:function(data){
             console.log(data);
            '<ul>'
             for(var i=0;i<data.query.search.length;i++){
             $("#data").append('<div class="col-md-8">'+ '<li>'+data.query.search[i].title + '</li>' + "<br>" + data.query.search[i].snippet + '....' + '<br>'+ '<a href="https://en.wikipedia.org/wiki/'+ data.query.search[i].title +'">'+  data.query.search[i].title + '</a>' + '<br><br>'+ '</div>' + '<br><br>');}
             '</ul>'
             //$('#text').val('');
         },
        error: function(errorMessage){
            alert("error");
        }
    });

   
        
});  
    
     $('#text').keyup(function(e){
         //console.log(e.keyCode);
        if(e.keyCode==13){
            //console.log("hello");
            $('searchitem').click();
        } 
     });

    
  });


