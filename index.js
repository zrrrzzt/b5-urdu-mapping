module.exports = async (request, response) => {
  const data = await request.body
  const result = JSON.parse(JSON.stringify(data))
  console.log(result)
  response.json(result)
}
