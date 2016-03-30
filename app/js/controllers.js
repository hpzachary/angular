'use strict';	

var myAppControllers = angular.module('phonecatControllers', []);

myAppControllers.controller('mainController', function($scope) {
// create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
    
	$scope.image = [{
		src: 'app/images/cropped_prof_pic.gif'
	}];
});
