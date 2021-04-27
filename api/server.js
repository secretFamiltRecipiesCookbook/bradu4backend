const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const restrict = require('./middleware/restricted');

const authRouter = require('./auth/auth-router');
const recipesRouter = require('./recipes/recipes-router')

const server = express()

server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/auth', authRouter);
server.use('/api/recipes', restrict, recipesRouter);

module.exports = server
