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




