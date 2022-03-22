import express from 'express'
import {Server} from 'socket.io'

const app = express()

const PORT = process.env.PORT || 5000

const io = new Server(6000)

io.on('connection', (socket) => {
    io.emit('welcome', 'hi')

    socket.on('chat message', (msg) => {
        io.emit('hello', 'hi')
    })
})

app.get('/', async (req, res) => {
    res.send('Merhaba dünya!')
})

app.get('/hello', async (req, res) => {
    res.send('Hello')
})

app.listen(PORT, () => {
    console.log('Uygulama 3000 portundan ayağa kalktı...')
})