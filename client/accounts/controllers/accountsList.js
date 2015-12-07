angular.module('lunarfest').controller('AccountsListCtrl', function($scope, $meteor){

	angular.extend($scope, {
		
		accounts: $meteor.collection(Accounts),

		remove: function(account) {
			$scope.accounts.splice($scope.accounts.indexOf(account), 1);
		},

		removeAll: function() {
			$scope.accounts.remove();
		}

	});

});