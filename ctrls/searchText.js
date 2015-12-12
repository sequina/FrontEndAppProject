// app.controller("mapsCtrl", [
//   function() {

// var map;
// var infowindow;


// function initMap() {
//   var myLatLng = {lat: 36.1667, lng: 86.7833};

//   map = new google.maps.Map(document.getElementById('map'), {
//     center: myLatLng,
//     zoom: 15
// // google.maps.event.addDomListener(window, 'load', initMap);
//     });
//   };
// // }]);

//   infowindow = new google.maps.InfoWindow();

//   var service = new google.maps.places.PlacesService(map);
//   service.nearbySearch({
//     location: myLatLng,
//     radius: 500,
//     types: ['store']
//   }, callback);

// function callback(results, status) {
//   if (status === google.maps.places.PlacesServiceStatus.OK) {
//     for (var i = 0; i < results.length; i++) {
//       createMarker(results[i]);
//     }
//   console.log("hello")
//   }
// }

// function createMarker(place) {
//   var placeLoc = place.geometry.location;
//   var marker = new google.maps.Marker({
//     map: map,
//     position: place.geometry.location
//   });

//   google.maps.event.addListener(marker, 'click', function() {
//     infowindow.setContent(place.name);
//     infowindow.open(map, this);
//   });
// }

// }]);

app.controller('mapsCtrl', function($scope, uiGmapGoogleMapApi) {
    uiGmapGoogleMapApi.then(function(maps) {
            // add map with base parameters
    $scope.map = {
      center: {
        latitude: 37.79,
        longitude: -122.4175
      },
      zoom: 13
    };
            // add test locations for example
    $scope.locations = {
      spots: [
        {
          number: 1,
          latitude: 37.7836377,
          longitude: -122.4132168
        },
        {
          number: 2,
          latitude: 37.7850504,
          longitude: -122.4146064
        },
        {
          number: 3,
          latitude: 37.807735,
          longitude: -122.418553
        }
      ]
    };
    // add markers for each location on the loaded tour
    $scope.markers = [];
    // function to create an individual marker
    $scope.createMarker = function(location) {
      var marker = {
        idKey: location.number,
        coords: {
          latitude: location.latitude,
          longitude: location.longitude
        }
      };
      return marker;
    };
    // function to fill array of markers
    $scope.createMarkers = function() {
      for (var i = 0; i < $scope.locations.spots.length; i++) {
        var marker = $scope.createMarker($scope.locations.spots[i]);
        $scope.markers.push(marker);
      }
    };
    // call upon controller initialization
    $scope.createMarkers();
  });
});




