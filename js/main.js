
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 49, lng: 33},
    zoom: 8
  });

  google.maps.event.addListener(map, "click", function (event) {
      var infowindow;

      var lat = event.latLng.lat(),
          lng = event.latLng.lng(),
          latLng = event.latLng,
          strHtml;
      var latitude = parseInt(event.latLng.lat());
      var longtitude = parseInt(event.latLng.lng());
      var api = '&APPID=b954adf70a75bda505e7076b1b0e9037';
      var units = '&units=metric';
      var requestData = 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longtitude + api + units;
      $.ajax({
        url: requestData ,
        method: 'get',
        dataType: 'json',
        success: function (data) {

            infowindow = new google.maps.InfoWindow({
              position: latLng,
              map: map,
              content: ('Temperature: ' + data.main.temp + "&deg" + "</br>" + 'Desctipron : ' + data.weather[0].description)
            });

            infowindow.open(map);
        }//success function end -
      });
  });
 }


//http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&APPID=b954adf70a75bda505e7076b1b0e9037&units=metric

//http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=b954adf70a75bda505e7076b1b0e9037

//http://api.worldweatheronline.com/premium/v1/weather.ashx?key=2ee2c4bafd4742d0885121758161805&q=48.85,2.35&num_of_days=2&tp=3&format=xml
