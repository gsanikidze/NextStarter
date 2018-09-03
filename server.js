const PORT = process.env.PORT || '3000'

// server
const next = require('next')
const routes = require('./routes')
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handler = routes.getRequestHandler(app)

// express
const express = require('express')
app.prepare().then(() => {
    express().use(handler).listen(PORT, (err) => {
        if (err) throw err
        console.log('> App Is Ready On Port: ', PORT)
    })
})