const MongoLib = require('../lib/mongo')

class QuestionsService{
  constructor(){
    this.collection = 'preguntas'
    this.mongoDB = new MongoLib()
  }

  async getAllQuestions({tags}){
    const query = tags && {tags: {$in: tags}}
    const questions = await this.mongoDB.getAll(this.collection, query)
    return questions || []
  }

  async getRandomQuestions(questionsSelected){
    console.log(questionsSelected)
    const query = {numero: {$in: questionsSelected}}
    const questions = await this.mongoDB.getRandom(this.collection, query)
    return questions || []
  }

  // async getQuestion({questionId}){
  //   const question = await this.mongoDB.get(this.collection, questionId)
  //   return question || []
  // }

  async createQuestion({question}){
    const createdQuestionId = await this.mongoDB.create(this.collection, question)
    return createdQuestionId
  }

  async updateQuestion({questionId, question}){
    const updatedQuestionId = await this.mongoDB.update(this.collection, questionId, question)
    return updatedQuestionId
  }

  async deleteQuestionId({questionId}){
    const deletedQuestionId = await this.mongoDB.delete(this.collection, questionId)
    return deletedQuestionId
  }
}

module.exports = QuestionsService
