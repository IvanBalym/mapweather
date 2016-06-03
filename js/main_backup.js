// var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// var labelIndex = 0;
// var pos = {};
// var weather;
// var url = 'http://api.openweathermap.org/data/2.5/weather?lat=26&lon=21&APPID=b954adf70a75bda505e7076b1b0e9037&units=metric';
// function setup() {
//   loadJSON(url);
// }
//
// function gotData(data) {
//   weather=data;
// }
//
// alert (weather.main.temp);

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 49, lng: 33},
    zoom: 8
  });


  google.maps.event.addListener(map, "click", function (event) {

      var latitude = parseInt(event.latLng.lat());
      var longtitude = parseInt(event.latLng.lng());
      var api = '&APPID=b954adf70a75bda505e7076b1b0e9037';
      var units = '&units=metric';
      var requestData = 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longtitude + api + units;
      var resultElement = $("#temp");
      console.log(requestData);

      $.ajax({
        url: requestData ,
        method: 'get',
        dataType: 'json',
        success: function (data) {
          resultElement.html('Temperature: ' + data.main.temp + "</br>" + 'Desctipron : ' + data.weather[0].description);
        }
      });
      var resultElement=$('#content');
      var contentString = '<div id="content">' + resultElement + '</div>';

      placeContent(event.latLng, map);
      function placeContent(latLng, map) {
        var infowindow = new google.maps.InfoWindow({
          position: latLng,
          map: map,
          content: contentString
        });
      }

      infowindow.open(map);
  });
 }











  // google.maps.event.addListener(map, 'click', function(event) {
  //   addMarker(event.latLng, map);
  // });

//  var infoWindow = new google.maps.InfoWindow({map: map});

  // Try HTML5 geolocation.
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function(position) {
//       var pos = {
//         lat: position.coords.latitude,
//         lng: position.coords.longitude
//       };
//       infoWindow.setPosition(pos);
//       infoWindow.setContent('Location found.');
//       map.setCenter(pos);
//     },
//     function() {
//       handleLocationError(true, infoWindow, map.getCenter());
//     });
//   }
//   else {
//     // Browser doesn't support Geolocation
//     handleLocationError(false, infoWindow, map.getCenter());
//   }
// }

// function addMarker(location, map) {
//   // Add the marker at the clicked location, and add the next-available label
//   // from the array of alphabetical characters.
//   var marker = new google.maps.Marker({
//     position: location,
//     label: labels[labelIndex++ % labels.length],
//     map: map
//   });
// }

// google.maps.event.addDomListener(window, 'load', initialize);
//
// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//   infoWindow.setPosition(pos);
//   infoWindow.setContent(browserHasGeolocation ?
//                         'Error: The Geolocation service failed.' :
//                         'Error: Your browser doesn\'t support geolocation.');
// }


//http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&APPID=b954adf70a75bda505e7076b1b0e9037&units=metric

//http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=b954adf70a75bda505e7076b1b0e9037

//http://api.worldweatheronline.com/premium/v1/weather.ashx?key=2ee2c4bafd4742d0885121758161805&q=48.85,2.35&num_of_days=2&tp=3&format=xml
