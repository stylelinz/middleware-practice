const express = require('express')

const app = express()
const port = 3000

app.use((req, res, next) => {
  const startTime = new Date()
  const timeStr = startTime.toLocaleString()
  res.on('finish', () => {
    const finishTime = new Date()
    console.log(`${timeStr} | ${req.method} from ${req.originalUrl} | total time: ${finishTime - startTime}ms`)
  })
  next()
})

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆 Todo')
})

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`)
})
