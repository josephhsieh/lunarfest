
if (Meteor.isClient) {
  
  // This code only runs on the client
  angular.module('lunarfest', ['angular-meteor']);

  angular.module('lunarfest').controller('loginCtrl', ['$scope', '$meteor', 
    function($scope, $meteor) {

      // user
      // {
      //   username: 'admin',
      //   password: 'abc123',
      //   profile: {
      //     firstName: 'Joseph',
      //     lastName: 'Hsieh',
      //     gender: 'M',
      //     dob: '1981-11-03'
      //   },
      //   email: 'joseph.hsieh@gmail.com',
      //   petId: 'a13j3j23s8x823439sdfsf82324kj'
      // }    


      angular.extend($scope, {
        addAccount: function(){
          console.log("ADD ACCOUNT");
        }
      });

  }]);
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
