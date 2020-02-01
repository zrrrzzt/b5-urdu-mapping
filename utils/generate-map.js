(async () => {
  const { writeFile } = require('fs').promises
  const axios = require('axios')
  const cheerio = require('cheerio')
  const { getItems } = require('@alheimsins/b5-costa-mccrae-300-ipip-neo-pi-r')
  const url = 'https://www-minhaaj-com.filesusr.com/html/a6e579_a61adbb27d4e1c42dca9cf04b3518b19.html'
  const { data } = await axios(url)
  const $ = cheerio.load(data)
  const rows = $('table > tbody > tr')
  const b5 = getItems('en')
  const questions = {}
  const getB5Question = question => b5.find(item => item.text.toLowerCase() === question.toLowerCase())
  rows.each((index, row) => {
    const cells = $(row).children('td')
    const questionNumber = parseInt($(cells[0]).text().replace('.', ''), 10)
    if (!isNaN(questionNumber)) {
      const key = `Q${questionNumber}`
      const question = $(cells[1]).text().split('.')[0].trim().replace('\n', ' ')
      const b5Question = getB5Question(question)
      questions[key] = b5Question ? b5Question.id : question
    }
  })
  await writeFile('lib/data/question-map.json', JSON.stringify(questions, null, 2), 'utf-8')
  console.log('finished')
})()
