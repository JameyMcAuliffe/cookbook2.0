'use strict'

app.controller('HomeCtrl', function($scope, $location) {
	$scope.recipesRedirect = () => { $location.url('/recipes') }
})
