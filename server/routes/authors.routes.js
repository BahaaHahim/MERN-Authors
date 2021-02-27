const AuthorController = require('../controllers/authors.controller');

module.exports = function(app){
    app.post('/api/addAuthor', AuthorController.addAuthor);
    app.delete('/api/deleteAuthor/:id', AuthorController.deleteAuthor);
    app.get('/api/allAuthors', AuthorController.getAllAuthors);
    app.put('/api/editAuthor/:id', AuthorController.updateAuthor);
    app.get('/api/author/:id', AuthorController.getAuthorById);




}
