todoApp.controller('TodoController', function (TodoService) {
    this.showCompleted = false;

    this.resetDescriptionFieldAndFetchTodos = function () {
        this.displayedTodo = TodoService.getTodos();
        this.editedTodo = {
            description: "",
            completed: false
        }
    }

    this.onClickAddTodo = function () {
        TodoService.addTodo(this.editedTodo);
        this.resetDescriptionFieldAndFetchTodos();
    }

    this.resetDescriptionFieldAndFetchTodos();
});