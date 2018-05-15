// Dependencies
const express = require('express')
const routerQuiz = express.Router()

// Model
const questionsModel = require('../models/question')

// Quiz API Routes (api/quiz/)
routerQuiz.get('/', (req, res, next) => {

    // Get All Questions
    questionsModel.find({}, function (err, items) {
        if (err) {
            console.error(err)
            res.json({ err: err })
        } else if (!items || !items.length) {
            questionsModel.seedQuestions(function (error, docs) {
                if (error) {
                    console.error(error)
                    res.json({ err: error})
                } else {
                    res.json({ questions: docs})
                }
            });
        } else {
            res.json({ questions: items })
        }
    })

})

// Export this Module
module.exports = routerQuiz
