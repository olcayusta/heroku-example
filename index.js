import express from 'express'

const app = express()

const PORT = process.env.PORT || 5000

app.get('/', async (req, res) => {
    res.send('Merhaba dünya!')
})

app.listen(PORT, () => {
    console.log('Uygulama 3000 portundan ayağa kalktı...')
})