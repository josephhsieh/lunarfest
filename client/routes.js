angular.module('lunarfest').config(function($urlRouterProvider, $stateProvider, $locationProvider){
	$locationProvider.html5Mode(true);

	$stateProvider
		.state('accounts', {
			url: '/accounts',
			templateUrl: 'client/accounts/views/accounts-list.html',
			controller: 'AccountsListCtrl'
		})
		.state('accountDetail', {
			url: '/accounts/:accountId',
			templateUrl: 'client/accounts/views/account-details.html',
			controller: 'AccountDetailsCtrl'
		})
		;

	$urlRouterProvider.otherwise('/accounts');
});