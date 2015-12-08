angular.module('lunarfest').controller('HomeCtrl', function($scope, $meteor){
	

	angular.extend($scope, {
		login: function(username, password){
			console.log('username: ' + username + " - " + password);
		}

	});

});