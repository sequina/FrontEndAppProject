//auth controller
app.controller("AuthCtrl", ["$firebaseAuth", "$location", "dataAccess", "$firebaseObject",
  function($firebaseAuth, $location, dataAccess, $firebaseObject) {

    var ref = new Firebase("https://doggydaycare.firebaseio.com");
    this.authObj = $firebaseAuth(ref);

    this.logOut = function(){
      // console.log('logged out');
      this.authObj.$unauth();
      dataAccess.resetUser();
      $location.path( "/main");
      $('.navBarNoAuth').toggle('display');
      $('.navBarAuth').toggle('display');

      this.isLoggedIn = false;
    };

    this.logIn = function(){
      // console.log('log in called');
      this.authObj.$authWithPassword({
        email: this.email,
        password: this.password
      }).then(function(authData) {
        // console.log("Logged in as:", authData.uid);
        dataAccess.setUser(authData);
        $('.navBarNoAuth').toggle('display');
        $('.navBarAuth').toggle('display');

      }.bind(this)).catch(function(error) {
        console.error("Authentication failed:", error);
      });
    };

    this.authWith = function(authType){
      // console.log('called Auth with ', authType);
      this.authObj.$authWithOAuthPopup(authType).then(function(authData) {
        console.log("Logged in as:", authData.uid);
        dataAccess.setUser(authData);
        $('.navBarNoAuth').toggle('display');
        $('.navBarAuth').toggle('display');

      }.bind(this)).catch(function(error) {
        console.error("Authentication failed:", error);
      });
    };

    this.register = function(){
        this.authObj.$createUser({
        email: this.newUser.email,
        password: this.newUser.password
      }).then(function(userData) {
        // console.log("User " + userData.uid + " created successfully!");
        // console.log(this.authObj);
        console.log(this.newUser);

        userRef = ref.child('users').child(userData.uid);
        userRefObj = $firebaseObject(userRef);
        userRefObj.uid = userData.uid;
        userRefObj.about = "New User";
        userRefObj.username = this.newUser.username;
        userRefObj.userPhoto = "./styles/pics/genericUserIcon.png";
        userRefObj.$save();


        return this.authObj.$authWithPassword({
          email: this.newUser.email,
          password: this.newUser.password
        });
      }.bind(this)).then(function(authData) {
        console.log("Logged in as:", authData.uid);
        dataAccess.setUser(authData);
        $('.navBarNoAuth').toggle('display');
        $('.navBarAuth').toggle('display');

      }.bind(this)).catch(function(error) {
        console.error("Error: ", error);
      });
    }; //end register

  }//end controller function
]);
