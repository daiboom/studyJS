const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()

app.set('port', process.env.PORT || 3000)

app.get('/', (req, res) => {
  res.type('text/plain')
  res.send('Home')
})

app.get('/about', (req, res) => {
  res.type('text/plain')
  res.send('About')
})

app.use((err, req, res, next) => {
  res.status(404).render('404 - Not Found')
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).render('500 - Server Error')
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

app.listen(app.get('port'), () => {
  console.log(
    `server started on http://localhost:${app.get(
      'port'
    )} press CTRL+C to terminate`
  )
})
// const http = require('http')

// http
//   .createServer((req, res) => {
//     const path = req.url.replace(/\/?(?:\?.*)?$/g, '').toLowerCase()

//     switch (path) {
//       case '':
//         res.writeHead(200, { 'Content-Type': 'text/plain' })
//         res.end('Home')
//         break
//       case '/about':
//         res.writeHead(200, { 'Content-Type': 'text/plain' })
//         res.end('About')
//         break
//       default:
//         res.writeHead(404, { 'Content-Type': 'text/plain' })
//         res.end('Not Found')
//         break
//     }
//   })
//   .listen(3000)
