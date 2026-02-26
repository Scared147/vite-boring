const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3000

// Serve static files
app.use(express.static(path.join(__dirname, 'public')))

// Serve vendor libraries from node_modules
app.use('/js/vendor/jquery', express.static(path.join(__dirname, 'node_modules/jquery/dist')))
app.use('/js/vendor/axios', express.static(path.join(__dirname, 'node_modules/axios/dist')))

// Routes
app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.get('/about', (_req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'))
})

app.get('/dashboard', (_req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'dashboard.html'))
})

// 404 handler
app.use((_req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
