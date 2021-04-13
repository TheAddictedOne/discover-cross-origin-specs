const express = require('express')
const app = express()
const nunjucks = require('nunjucks')

const PORT = 3000
const COEP = 'Cross-Origin-Embedder-Policy'
const COEP_REQUIRECORP = 'require-corp'
const COOP = 'Cross-Origin-Opener-Policy'
const COOP_SAMEORIGIN = 'same-origin'

const ARGV_NOHEADERS = '--no-headers'

const noHeaders = process.argv.includes(ARGV_NOHEADERS)

const setHeaders = noHeaders
  ? () => {}
  : (res) => {
    res.set(COEP, COEP_REQUIRECORP)
    res.set(COOP, COOP_SAMEORIGIN)
  }

app.use(express.static('static', { setHeaders }))

nunjucks.configure('views', {
    autoescape: true,
    express: app,
    noCache: true,
})

app.use('/', (req, res) => {
  setHeaders(res)
  res.render('index.nunjucks', { noHeaders })
})

app.listen(PORT, () => console.log(`Server: http://localhost:${PORT} with noHeaders: ${noHeaders}`))
