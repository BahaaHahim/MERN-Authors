const { response } = require('express');
const {Author} = require('../models/authors.models')

module.exports.addAuthor = (request, response) => {
    Author.create(request.body)
        .then(perfume => response.json(perfume))
        .catch(err => response.status(400).json(err));
}

module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
module.exports.getAllAuthors= (request, response) => {
    Author.find({})
        .then(persons => response.json(persons))
        .catch(err => response.json(err))
}

module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedAuthor=> response.json(updatedAuthor))
        .catch(err => response.json(err))
}
module.exports.getAuthorById = (request, response) => {
    Author.findOne({_id:request.params.id})
        .then(author => response.json(author))
        .catch(err => response.json(err))
}