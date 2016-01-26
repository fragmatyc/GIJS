// Création du service
todoApp.service('TodoService', function () {
    this.todos = [];

    this.getTodos = function () {
        return this.todos;    
    } 

    this.addTodo = function (todoToAdd) {
        this.todos.push(todoToAdd);
    }
    
    this.makeNewTodoInstance = function () {
        return {
            description: "",
            completed: false
        };
    }
});