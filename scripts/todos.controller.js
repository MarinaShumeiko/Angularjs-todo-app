'use strict';

angular.module("MyTodoList")
	.controller('todosCtrl', function($scope, dataService){
		$scope.addTodo = function() {	
			$scope.todos.unshift({
				"name": $scope.addNewTodo
			});
			$scope.addNewTodo = '';  
		};
		$scope.todos = [
			{"name": "example todo A"},
			{"name": "example todo B"},
			{"name": "example todo C"},
			{"name": "example todo D"},
			{"name": "example todo E"},
			{"name": "example todo F"}
		];
		$scope.deleteTodo = function(todo, $index) {
			dataService.deleteTodo(todo);
			$scope.todos.splice($index, 1);
		};
		$scope.saveTodos = function() {
			var filteredTodos = $scope.todos.filter(function(todo){  // filter method filtered array to a new array
				if (todo.edited) {
					return todo;
				};
			});
			dataService.saveTodos(filteredTodos);
		}
		// $scope.myFunct = function(keyEvent) {
		// 	if (keyEvent.which === 13)
		// 		alert('I am an alert');
		// }
		// dataService.getTodos(function(response){
		// 	console.log(response.data);
		// 	$scope.todos = response.data;
		// });

});