const db = require('./db')
const { User, Department } = db.models
const express = require('express')
const app = express()
const path = require('path')

const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`listening to port: ${port}`))


app.use('/dist', express.static(path.join(__dirname, 'dist')))


app.get('/', (req, res, next)=> {
  res.sendFile(path.join(__dirname, 'index.html'))
})


app.get('/api/departments', (req, res, next)=> {
  Department.findAll({
    include: [User]
  })
    .then(departments => res.send(departments))
    .catch(next)
})

app.get('/api/departments/:id', (req, res, next)=> {
  Department.findById(req.params.id, {
    include: [User]
  })
    .then(department => res.send(department))
    .catch(next)
})


db.syncAndSeed()
  .then(()=> console.log('synched and seeded!'))