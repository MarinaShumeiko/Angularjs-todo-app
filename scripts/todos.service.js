angular.module("MyTodoList")
    .service('dataService', function($http){
        this.getTodos =  function(callback){
            $http.get('todos.json').then(callback)
        };
        this.deleteTodo = function(todo){
            console.log('this' + todo.name + ' was deleted')
        };
        this.saveTodos = function(todo){
            console.log(todos.length + " todos have been saved!");
        };
        this.markAll = function(todo) {
            console.log("all todos were completed!");
        }
    });