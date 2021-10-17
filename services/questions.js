const {questionsMock} = require('../utils/mocks/questions')

class QuestionsService{
  async getQuestions(){
    const questions = await Promise.resolve(questionsMock)
    return questions || []
  }

  async getQuestion(){
    const question = await Promise.resolve(questionsMock[0])
    return question || []
  }

  async createQuestion(){
    const createdQuestionId = await Promise.resolve(questionsMock[0].numero)
    return createdQuestionId
  }

  async updateQuestion(){
    const updatedQuestionId = await Promise.resolve(questionsMock[0].numero)
    return updatedQuestionId
  }

  async deleteQuestionId(){
    const deletedQuestionId = await Promise.resolve(questionsMock[0].numero)
    return deletedQuestionId
  }
}

module.exports = QuestionsService
