'use strict'
const mongoose = require('mongoose')
//this comment is for the branch
const bookSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: String,
    thumbnail: String
})

const bookModel = mongoose.model('Book', bookSchema)

exports.bookSchema = bookSchema
exports.bookModel = bookModel