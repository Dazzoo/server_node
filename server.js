const http = require('http')

let requestCount = 0

const server = http.createServer((request, response) => {
    switch (request.url) {
        case '/lviv':
            response.write('Welcome to Lviv')
            break;
        case '/kyiv':
            response.write('Welcome to Kyiv')
            break;
        case '/odessa':
            response.write('Welcome to Odessa')
            break;
        default:
            response.write('404 not found')
    }

    if(request.url !== '/favicon.ico') {
        requestCount++
    }
    response.write(`
Hello World from Ukraine
Request Count: ${requestCount}`)
    response.end()
})

server.listen(3003)