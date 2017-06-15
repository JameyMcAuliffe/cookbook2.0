'use strict'

app.controller('RecipesCtrl', function($scope, Recipes) {
	Recipes.getRecipes()
	.then(recipes => {
		$scope.recipes = Object.keys(recipes)
		$scope.ingredients = Object.values(recipes)
		$scope.ingredientNames
		$scope.ingredientValues
		for(let i = 0; i < $scope.ingredients.length; i++) {
			$scope.ingredientNames = (Object.keys($scope.ingredients[i].Ingredients))
			$scope.ingredientValues = (Object.values($scope.ingredients[i].Ingredients))
		}
		console.log("Keys:", Object.keys(recipes))
		console.log("Values:", Object.values(recipes))
		console.log("Ingredients:", $scope.ingredientNames)
		// console.log("Ingredients:", Object.keys($scope.ingredients[0].Ingredients))
		// console.log("Ingredients:", Object.values($scope.ingredients[0].Ingredients))
	 })
})
