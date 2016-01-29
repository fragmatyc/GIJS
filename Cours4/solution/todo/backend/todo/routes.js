var TodoService = require('./service');
var serviceInstance = new TodoService();

module.exports = function (app) {
    
    app.get('/api/todo', function (req, res) {
        serviceInstance.findAllTodos()
        .then(function (todos) {
            res.json({
                success: true, 
                result: todos
            });
        }).catch(function (err) {
             res.json({
                success: false, 
                reason: err
            });  
        });
    });
    
    app.post('/api/todo', function (req, res) {
        console.log(res.data);
    });
};