const express = require('express')
const QuestionsService = require('../services/questions')

function questionAPI(app){
  const router = express.Router()
  app.use('/api/questions', router)

  const questionService = new QuestionsService()

  router.get('/', async(req, res, next) => {
    try {
      const questions = await questionService.getQuestions()

      res.status(200).json({
        data: questions,
        message: 'questions listed'
      })

    } catch (e) {
      next(e)
    }
  })

  router.get('/:questionId', async(req, res, next) => {
    const {questionId} = req.params
    try {
      const question = await questionService.getQuestion({questionId})

      res.status(200).json({
        data: question,
        message: 'Question listed'
      })

    } catch (e) {
      next(e)
    }
  })

  router.post('/', async(req, res, next) => {
    const {body: question} = req
    try {
      const createdQuestionId = await questionService.createQuestion({question})

      res.status(200).json({
        data: createdQuestionId,
        message: 'Question listed'
      })

    } catch (e) {
      next(e)
    }
  })

  router.put('/:questionId', async(req, res, next) => {
    const {questionId} = req.params
    const {body: question} = req
    try {
      const updatedQuestionId = await questionService.createQuestion({questionId, question})

      res.status(200).json({
        data: updatedQuestionId,
        message: 'Question listed'
      })

    } catch (e) {
      next(e)
    }
  })

  router.delete('/:questionId', async(req, res, next) => {
    const {questionId} = req.params
    try {
      const deletedQuestionId = await questionService.deleteQuestionId({questionId})

      res.status(200).json({
        data: deletedQuestionId,
        message: 'Question listed'
      })

    } catch (e) {
      next(e)
    }
  })
}

module.exports = questionAPI
