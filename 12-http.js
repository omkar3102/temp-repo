const http = require('http');

//creaate a server object:
const server = http.createServer((req,res) => {
    res.write('Welcome to the home page')
    res.end()//end the response
})


server.listen(5000)