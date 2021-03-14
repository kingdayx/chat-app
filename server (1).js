const express = require('express');
const app = express();

// Stream Chat server SDK
const StreamChat = require('stream-chat').StreamChat;
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile("C:\newApplication\ariel-application\stream-chat-javascript\index.html");
});

app.listen(8800, () => {
    console.log('chatApp listening on port 8800!');
});


// serverClient - start

const serverClient = new StreamChat("humar5rxfavd", "3qgt3fa6qq74e3kf5nwydbbwjuw337afwmsdb7w2kus4wy94quwqgjbg4t9kzx2t");

app.get('/token', (req, res) => {
    const { username } = req.query;
    if (username) {
        const token = serverClient.createToken(username);
        res.status(200).json({ token, status: 'sucess' });
    } else {
        res.status(401).json({ message: 'invalid request', status: 'error' });
    }
});