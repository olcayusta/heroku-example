import express from 'express'

const app = express()

app.get('/', async (req, res) => {
    res.send('Merhaba dünya!')
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Uygulama 3000 portundan ayağa kalktı...')
})