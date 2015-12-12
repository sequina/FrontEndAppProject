var app = angular.module('DoggyDayCareApp', ['ngRoute', 'uiGmapgoogle-maps']);

app.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
           key: 'AIzaSyDP6t36O6pZArVuHSoD3nEUBBTwUMFCwdg',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
})
