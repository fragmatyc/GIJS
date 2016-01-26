// Création du controller
todoApp.controller('TodoController', function (TodoService) {
    this.showCompleted = false;

    this.resetDescriptionFieldAndFetchTodos = function () {
        this.displayedTodo = TodoService.getTodos();
        this.editedTodo = TodoService.makeNewTodoInstance();
    }

    this.onClickAddTodo = function () {
        TodoService.addTodo(this.editedTodo);
        this.resetDescriptionFieldAndFetchTodos();
    }
    
    this.taskCount = function () {
        return this.displayedTodo
            .filter(function (item) {
                return !item.completed;
            })
            .length;
    }

    this.resetDescriptionFieldAndFetchTodos();
});