angular.module('lunarfest').controller('AccountDetailsCtrl', function($scope, $stateParams, $meteor){
	$scope.account = $meteor.object(Accounts, $stateParams.accountId);
});