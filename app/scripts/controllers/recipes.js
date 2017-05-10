'use strict'

app.controller('RecipesCtrl', function($scope, Recipes) {
	Recipes.getRecipes()
	.then(recipes => {
		$scope.recipes = recipes
		console.log("Recipes:", $scope.recipes)
	 })
})
