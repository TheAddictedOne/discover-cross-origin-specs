const express = require('express')
const app = express()

const PORT = 3000
const COEP = 'Cross-Origin-Embedder-Policy'
const COEP_REQUIRECORP = 'require-corp'
const COOP = 'Cross-Origin-Opener-Policy'
const COOP_SAMEORIGIN = 'same-origin'

const ARGV_NOHEADERS = '--no-headers'

let setHeaders = (res) => {
  res.set(COEP, COEP_REQUIRECORP)
  res.set(COOP, COOP_SAMEORIGIN)
}

if (process.argv.includes(ARGV_NOHEADERS)) {
  setHeaders = () => {}
}

app.use(express.static('docs', { setHeaders }))

app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))
