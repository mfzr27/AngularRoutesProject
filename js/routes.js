app.config(function($routeProvider){
	$routeProvider
	.when('/home', {
		templateUrl: 'js/views/home/home.html',
		controller: 'homeCtrl'
	})
	.otherwise({
		redirectTo:'/home'
	})
});