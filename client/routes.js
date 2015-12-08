angular.module('lunarfest').config(function($urlRouterProvider, $stateProvider, $locationProvider){
	$locationProvider.html5Mode(true);

	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'client/home/views/home.html',
			controller: 'HomeCtrl'
		})
		.state('lobby', {
			url: '/lobby',
			templateUrl: 'client/lobby/views/lobby.html',
			controller: 'LobbyCtrl'
		})
		.state('profile', {
			url: '/profile/:profileId',
			templateUrl: 'client/profile/views/profile.html',
			controller: 'ProfileCtrl'
		})
		.state('profileList', {
			url: '/profileList',
			templateUrl: 'client/profile/views/profile-list.html',
			controller: 'ProfileListCtrl'
		})

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
        .state('imageUpload',{
            url: '/images',
            templateUrl: 'client/images/views/images.html',
            controller: 'ImagesCtrl'
        })
		;

	$urlRouterProvider.otherwise('/home');
});