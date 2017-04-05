angular.module("MyTodoList")
    .directive('todos', function() {
  return {
    templateUrl: 'todos.html',
    controller: 'todosCtrl',
    replace: true
  }
})