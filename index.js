const calculateScore = require('@alheimsins/bigfive-calculate-score')
const repackQuestions = require('./lib/repack-questions')

module.exports = async (request, response) => {
  const post = await request.body
  const questions = JSON.parse(JSON.stringify(post))
  const answers = repackQuestions(questions)
  const score = calculateScore({ answers })
  const converted = {
    lang: 'ur',
    test: 'costa-mccrae-300-ipip-neo-pi-r',
    totalQuestions: 300,
    nickname: questions.Nick,
    age: questions.Age,
    sex: questions.Sex,
    country: questions.Country,
    honestly: questions.A,
    allAnswered: questions.B,
    correct: questions.C,
    answers,
    score
  }
  response.json(converted)
}
