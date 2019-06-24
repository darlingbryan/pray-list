const express = require('express')

const app = express()

app.use(express.json({ extended: false }))

app.get('/', (req, res) => {
  res.json({ msg: 'Welcome to the PrayerList API' })
})

//define routes

app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
// app.use('api/prayers', require('./routes/prayers'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server is up on port ${PORT}`))
