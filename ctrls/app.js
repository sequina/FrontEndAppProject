var app = angular.module('DoggyDayCareApp', ['ngRoute', 'uiGmapgoogle-maps']);

// app.config(
//     ['uiGmapGoogleMapApiProvider', function(GoogleMapApiProviders) {
//         GoogleMapApiProviders.configure({
//             china: true
//         });
//     }]
// );



app.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
})
