$(document).ready(function(){
  var $currentTemp = $("#current-temp");
  var $feelsLikeTemp = $("#feels-like-temp");


    console.log("Hello!")

    $.ajax({
      url: "/get_forecast",
      type: "get",
      dataType: "json",
      success: function(response) {
        console.log(response.forecast.body.currently);
        $feelsLikeTemp.html(response.forecast.body.currently.apparentTemperature);
        $currentTemp.html(response.forecast.body.currently.temperature);
      },
      error: function(response) {
        console.log(response);
      }
    });



  navigator.geolocation.getCurrentPosition(function(position){
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

 


});

  
});
