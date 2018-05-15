// Dependencies
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Quiz Schema
const QuestionSchema = new Schema({
    id: Number,
    question: String,
    options: Array,
    answer: Array
})

const QuestionModel = module.exports = mongoose.model('Question', QuestionSchema)

module.exports.seedQuestions = function (callback) {
    var questions = [
        {
            "id": 1,
            "question": "Question 1",
            "options": [ "Option 1", "Option 2",  "Option 3", "Option 4"],
            "answer": ["Option 1"]
        },
        {
            "id": 2,
            "question": "Question 2",
            "options": [ "Option 1", "Option 2",  "Option 3", "Option 4"],
            "answer": ["Option 2"]
        },
        {
            "id": 3,
            "question": "Question 3",
            "options": [ "Option 1", "Option 2",  "Option 3", "Option 4"],
            "answer": ["Option 3"]
        },
        {
            "id": 4,
            "question": "Question 4",
            "options": [ "Option 1", "Option 2",  "Option 3", "Option 4"],
            "answer": ["Option 4"]
        },
        {
            "id": 5,
            "question": "Question 5",
            "options": [ "Option 1", "Option 2",  "Option 3", "Option 4"],
            "answer": ["Option 1", "Option 4"]
        },
        {
            "id": 6,
            "question": "Question 6",
            "options": [ "Option 1", "Option 2",  "Option 3", "Option 4"],
            "answer": ["Option 1"]
        },
        {
            "id": 7,
            "question": "Question 7",
            "options": [ "Option 1", "Option 2",  "Option 3", "Option 4"],
            "answer": ["Option 3"]
        },
        {
            "id": 8,
            "question": "Question 8",
            "options": [ "Option 1", "Option 2",  "Option 3", "Option 4"],
            "answer": ["Option 2", "Option 4"]
        },
        {
            "id": 9,
            "question": "Question 9",
            "options": [ "Option 1", "Option 2",  "Option 3", "Option 4"],
            "answer": ["Option 1", "Option 3"]
        },
        {
            "id": 10,
            "question": "Question 10",
            "options": [ "Option 1", "Option 2",  "Option 3", "Option 4"],
            "answer": []
        }
    ];

    QuestionModel.collection.insert(questions, function(err, result) {
        if (err)
            return callback(err);

        callback(null, result.ops);
    })
}