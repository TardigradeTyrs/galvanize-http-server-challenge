http = require('http')
let HOST = "localhost"
let PORT = 3000
const server = http.createServer((request, response) => {
  response.end(`Hello, Galvanize! Server is running on ${HOST}:${PORT}`)
})
server.listen(3000, "localhost", () => {
  console.log(`Server is running at ${HOST};${PORT}`)
})