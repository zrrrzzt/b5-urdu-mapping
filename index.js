const repackQuestions = require('./lib/repack-questions')

module.exports = async (request, response) => {
  const data = await request.body
  const questions = JSON.parse(JSON.stringify(data))
  const answers = repackQuestions(questions)
  console.log(answers)
  response.json(answers)
}
