const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { StreamChat } = require('stream-chat')
require('dotenv').config()

const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


const serverSideClient = new StreamChat(
    "humar5rxfavd",
    "3qgt3fa6qq74e3kf5nwydbbwjuw337afwmsdb7w2kus4wy94quwqgjbg4t9kzx2t"
)

app.post('/join', async(req, res) => {
    const { username } = req.body


    const token = serverSideClient.createToken(username)

    return res.status(200).json({ user: { username }, token })
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})