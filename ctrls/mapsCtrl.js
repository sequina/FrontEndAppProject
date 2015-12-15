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

var searchBox = new google.maps.places.SearchBox(document.getElementById('pac-input'));
   map.controls[google.maps.ControlPosition.TOP_CENTER].push(document.getElementById('pac-input'));
   google.maps.event.addListener(searchBox, 'places_changed', function() {
     searchBox.set('map', null);


     var places = searchBox.getPlaces();

     var bounds = new google.maps.LatLngBounds();
     var i, place;
     for (i = 0; place = places[i]; i++) {
       (function(place) {
         var marker = new google.maps.Marker({

           position: place.geometry.location
         });
         marker.bindTo('map', searchBox, 'map');
         google.maps.event.addListener(marker, 'map_changed', function() {
           if (!this.getMap()) {
             this.unbindAll();
           }
         });
         bounds.extend(place.geometry.location);


       }(place));

     }
     map.fitBounds(bounds);
     searchBox.set('map', map);
     map.setZoom(Math.min(map.getZoom(),12));

   });

google.maps.event.addDomListener(window, 'load', init);



