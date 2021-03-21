let client, channel, username, activeUser;

client = new StreamChat("humar5rxfavd", "3qgt3fa6qq74e3kf5nwydbbwjuw337afwmsdb7w2kus4wy94quwqgjbg4t9kzx2t");




async function generateToken(username) {
    const { token } = (await axios.get(`/token?username=${username}`)).data;
    return token;
}
async function startClient() {
    const token = await generateToken(username);

    await client.setUser({
            id: username,
            name: 'username',
            image: ``
        },
        token
    );


    return client;
}
const user = document.getElementById('user-login-input');

user.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        checkAuthState();
    }
});

checkAuthState();

async function checkAuthState() {
    if (!user.value) {
        document.getElementById('login-block').style.display = 'grid';
        document.getElementsByClassName('chat-container')[0].style.display = 'none';
    } else {
        username = user.value;

        await startClient();

        document.getElementsByClassName('chat-container')[0].style.display = 'grid';
        document.getElementById('login-block').style.display = 'none';
    }
}

function populateUsers(users) {

    const otherUsers = users.filter(user => user.id !== username);

    const usersElement = document.getElementById('users');
    otherUsers.map(user => {
        const userElement = document.createElement('div');

        userElement.className = 'user';
        userElement.id = user.id;
        userElement.textContent = user.id;
        userElement.onclick = () => selectUserHandler(user);

        usersElement.append(userElement);
    });
}

async function selectUserHandler(userPayload) {
    if (activeUser === userPayload.id) return;

    activeUser = userPayload.id;

    const allUsers = document.getElementsByClassName('user');
    Array.from(allUsers).forEach(user => {
        user.classList.remove('active');
    });


    const userElement = document.getElementById(userPayload.id);
    userElement.classList.add('active');


    const messageContainer = document.getElementById('messages');
    messageContainer.innerHTML = '';


}

async function listUsers() {
    const filters = {};
    const response = await client.queryUsers(filters);

    populateUsers(response.users);
    return response;
}
async function initializeClient() {


    await listUsers();

    return client;
}

async function initializeChannel(members) {

    channel = client.channel('messaging', {
        members: members,
        session: 8
    });

    await channel.watch();
}
async function selectUserHandler(userPayload) {


    await initializeChannel([username, userPayload.id]);
}

function appendMessage(message) {
    const messageContainer = document.getElementById('messages');


    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${
      message.user.id === username ? 'message-right' : 'message-left'
    }`;

    const usernameDiv = document.createElement('div');
    usernameDiv.className = 'message-username';
    usernameDiv.textContent = `${message.user.id}:`;


    messageDiv.append(usernameDiv);


    const messageTextDiv = document.createElement('div');
    messageTextDiv.textContent = message.text;


    messageDiv.append(messageTextDiv);


    messageContainer.appendChild(messageDiv);
}
async function initializeChannel(members) {

    channel.on('message.new', event => {
        appendMessage(event.message);
    });
}
async function initializeChannel(members) {

    channel.state.messages.forEach(message => {
        appendMessage(message);
    });
}
async function sendMessage(message) {
    return await channel.sendMessage({
        text: message
    });
}
const inputElement = document.getElementById('message-input');

inputElement.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        sendMessage(inputElement.value);
        inputElement.value = '';
    }
});

inputElement.addEventListener(`keyup`, function(event) {

    if (event.key === "Shift") {
        inputElement.value -= 1;
    }

})

inputElement.addEventListener(`keyup`, function(event) {

    if (event.key === "Shift" && event.key === "Delete") {
        inputElement.value.delete();
    }

})