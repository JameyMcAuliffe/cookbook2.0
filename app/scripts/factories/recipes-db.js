'use strict'

app.factory('Recipes', function($http) {
	const getRecipes = () => {
		return $http.get('https://cookbook-c1458.firebaseio.com/recipes.json')
		.then(data => data.data)
	}

	return { getRecipes }
})
