$(document).ready(function(){
    
var output = [];    
    
   $('#one').click(function(){
       $('#textarea').append(1);
        output.push(1);
   })
    
   $('#two').click(function(){
       $('#textarea').append(2);
        output.push(2);
   })
   $('#three').click(function(){
       $('#textarea').append(3);
        output.push(3);
   })
   
   $('#four').click(function(){
       $('#textarea').append(4);
        output.push(4);
   })
   
   $('#five').click(function(){
       $('#textarea').append(5);
        output.push(5);
   })
   
   $('#six').click(function(){
       $('#textarea').append(6);
        output.push(6);
   })
   
   $('#seven').click(function(){
       $('#textarea').append(7);
        output.push(7);
   })
   
   $('#eight').click(function(){
       $('#textarea').append(8);
        output.push(8);
   })
   
   $('#nine').click(function(){
       $('#textarea').append(9);
        output.push(9);
   })
   
   $('#zero').click(function(){
       $('#textarea').append(0);
        output.push(0);
   })
   
   $('#d').click(function(){
       $('#textarea').append('.');
        output.push('.');
   })
   
   $('#div').click(function(){
       $('#textarea').append('/');
       output.push('/');
       console.log(output);
   })
   
   $('#mul').click(function(){
       $('#textarea').append('*');
       output.push('*');
   })
   
   $('#min').click(function(){
       $('#textarea').append('-');
       output.push('-');
   })
   
   $('#add').click(function(){
       $('#textarea').append('+');
       output.push('+');
   })
   
   $('#clear').click(function(){
       document.getElementById('textarea').innerHTML = ' '; 
       output = [];
       console.log(output);
   })
   
   $('#e').click(function(){
       var d = output.join('');
       var a = eval(d);
       $('#textarea').append('<br>'+ a);
   })
    
});