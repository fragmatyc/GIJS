todoApp.service('TodoService', function () {
    this.todos = [];

    this.getTodos = function () {
        return this.todos;    
    } 

    this.addTodo = function (todoToAdd) {
        this.todos.push(todoToAdd);
    }
});