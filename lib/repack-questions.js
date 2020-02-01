const { getItems } = require('@alheimsins/b5-costa-mccrae-300-ipip-neo-pi-r')
const questionMap = require('./data/question-map.json')
const items = getItems('en')
const getQuestion = id => items.find(item => item.id === id)

module.exports = questions => {
  const answers = Object.keys(questions).reduce((accumulator, questionId) => {
    if (questionId.startsWith('Q')) {
      const score = questions[questionId]
      const id = questionMap[questionId]
      const question = getQuestion(id)
      accumulator.push({ ...question, score })
    }
    return accumulator
  }, [])
  return answers
}
