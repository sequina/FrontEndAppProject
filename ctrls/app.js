var app = angular.module('doggyDayCareApp', ["firebase", 'angular', 'ngRoute', 'ui.bootstrap']);

// //Setting Up routes
// app.config(['$routeProvider', function($routeProvider){

//   //route for log in
//   $routeProvider
//     .when('/login', {
//       templateUrl: 'partials/login.html',
//       controller: 'AuthCtrl as authCtrl'
//     })
//   //route for register
//     .when('/register', {
//       templateUrl: 'partials/register.html',
//       controller: 'AuthCtrl as authCtrl'
//     })
//   //route for main view
//     .when('/main', {
//       templateUrl: 'partials/mainView.html',
//       controller: 'MainViewCtrl as viewCtrl'
//     })
//   //route for userProfile
//     .when('/users/myProfile', {
//       templateUrl: 'partials/myProfile.html',
//       controller: 'MyProfileCtrl as profileCtrl'
//   })
//     .when('/users', {
//       templateUrl: 'partials/users.html',
//       controller: 'UsersCtrl as usersCtrl'
//     })
//     //route for other user profile
//     .when('/users/:uid', {
//       templateUrl: 'partials/userProfile.html',
//       controller: 'UserProfileCtrl as profileCtrl'
//   })
//     .otherwise({ redirectTo: 'main' });

// }]);

