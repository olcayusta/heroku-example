import express from 'express'
import {Server} from 'socket.io'
import {fileURLToPath} from 'url'
import {dirname} from 'path'

const app = express()

import {createServer} from 'http'
const server = createServer(app);

const PORT = process.env.PORT || 5000

const io = new Server(server)

io.on('connection', (socket) => {
    socket.broadcast.emit('hi');

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
})

app.get('/', async (req, res) => {
    const __dirname = dirname(fileURLToPath(import.meta.url))
    res.sendFile(__dirname + '/index.html')
})

app.get('/hello', async (req, res) => {
    res.send('Hello')
})

server.listen(PORT, () => {
    console.log('Uygulama 3000 portundan ayağa kalktı...')
})