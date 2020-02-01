(async () => {
  const { writeFile } = require('fs').promises
  const data = {}
  let counter = 1
  while (counter < 301) {
    const key = `Q${counter}`
    data[key] = ''
    counter++
  }
  await writeFile('lib/data/question-map.json', JSON.stringify(data, null, 2), 'utf-8')
  console.log('finished')
})()
