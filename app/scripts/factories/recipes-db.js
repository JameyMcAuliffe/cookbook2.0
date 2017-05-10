'use strict'

app.factory('Recipes', function($http) {
	const getRecipes = () => {
		// return $http.get('https://console.firebase.google.com/project/cookbook-c1458/database/data.json')
		return $http.get('https://cookbook-c1458.firebaseio.com/recipes.json')
		.then(data => data.data)
		// const dbRef = firebase.database().ref().child('recipes')
		// return dbRef.on('value', snap => console.log(snap.val()))


	}

	return { getRecipes }
})
