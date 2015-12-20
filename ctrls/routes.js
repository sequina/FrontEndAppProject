var app = angular.module('DoggyDayCareApp', ["firebase", 'angular.filter', 'ngRoute', 'ui.bootstrap']);

//Setting Up routes
app.config(['$routeProvider', function($routeProvider){

  //route for log in
  $routeProvider
    .when('/login', {
      templateUrl: 'partials/login.html',
      controller: 'AuthCtrl as authCtrl'
    })
  //route for register
    .when('/register', {
      templateUrl: 'partials/register.html',
      controller: 'AuthCtrl as authCtrl'
    })
  //route for main view
    .when('/main', {
      templateUrl: 'partials/mainView.html',
      controller: 'MainViewCtrl as viewCtrl'
    })
// .otherwise({ redirectTo: 'main' });

}]);

