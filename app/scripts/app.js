
const app = angular.module('Cookbook', ['ngRoute'])
	.config(function($routeProvider) {

	//Initialize firebase
	var config = {
	    apiKey: "AIzaSyAlIQXZuKYVaIenuWdlS2k2kckv8TUsxbM",
	    authDomain: "cookbook-c1458.firebaseapp.com",
	    databaseURL: "https://cookbook-c1458.firebaseio.com",
	    projectId: "cookbook-c1458",
	    storageBucket: "cookbook-c1458.appspot.com",
	    messagingSenderId: "541654605084"
	  };
	  firebase.initializeApp(config);

	const dbRef = firebase.database().ref().child('recipes')
	dbRef.on('value', snap => console.log(snap.val()))

	//Routes
	$routeProvider
		.when('/', {
			templateUrl: '../templates/home.html',
			controller: 'HomeCtrl'
		})
		.when('/recipes', {
			templateUrl: '../templates/recipes.html',
			controller: 'RecipesCtrl'
		})

})
