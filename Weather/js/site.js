$(document).ready(function(){
    var url;
 getLocation();
   
    var x;
  function getLocation() {
      
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
      
}
    
function showPosition(position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;
    url =  'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&APPID=4ee215c0717ad59da8ce55f601bd95af';
    $.getJSON(url,function(data){
        console.log(data);  
        document.getElementById("city").innerHTML = data.name + "," + data.sys.country;
        if(data.weather[0].main != "Clear"){
            document.getElementById("top").src = "http://cdn.wallpapersafari.com/7/38/nFgrDT.jpg";
            
        }
        else{
            document.getElementById("wea").innerHTML = data.weather[0].main;
            
        }
        
        document.getElementById("temp").innerHTML = Math.round(data.main.temp_max - 273);
       
        //var x = data.weather[0].main;
        
        
        var unit;
        
        $("#unit").click(function(){
            if(unit == '&deg;C'){
            document.getElementById("temp").innerHTML = Math.round(9/5*(data.main.temp_max - 273)+32);
            unit = '&deg;F';
            document.getElementById('unit').innerHTML = unit;
            }
            
            else{
                document.getElementById("temp").innerHTML = Math.round(data.main.temp_max - 273);
                unit = '&deg;C';
                document.getElementById('unit').innerHTML = unit;
            }
        });
        
    
    });
    
    
    
   
}
    
     
     
  
});

  
  
  
   