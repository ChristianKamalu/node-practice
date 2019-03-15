const express = require('express')

const app = express()
const user_controller = require('./user_contoller')

app.get('/api/users', user_controller.getUsers)

app.get('/api/user/:id', user_controller.getUserById)

app.get('/api/userEmail', user_controller.getUserByEmail)

app.get('/api/userName/:firstName' , user_controller.getUserByName)

const PORT = 3456
app.listen(PORT, () => console.log(`listening on ${PORT}`))