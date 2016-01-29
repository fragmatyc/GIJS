'use strict';

class TodoService {
    constructor() {
        this.todos = [];
    }

    findAllTodos() {
        var self = this;
        
        return new Promise(function (resolve, reject) {
            return resolve(self.todos);
        });
    }
}

module.exports = TodoService;