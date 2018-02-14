const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

let friends = [
	{
		id: 1,
		name: 'Ben',
		age: 30,
		email: 'ben@lambdaschool.com',
	},
	{
		id: 2,
		name: 'Austen',
		age: 32,
		email: 'austen@lambdaschool.com',
	},
	{
		id: 3,
		name: 'Ryan',
		age: 35,
		email: 'ryan@lambdaschool.com',
	},
	{
		id: 4,
		name: 'Sean',
		age: 35,
		email: 'sean@lambdaschool.com',
	},
	{
		id: 5,
		name: 'Michelle',
		age: 67,
		email: 'michelle@gmail.com',
	},
	{
		id: 6,
		name: 'Luis',
		age: 47,
		email: 'luis@lambdaschool.com',
	},
];

app.use(bodyParser.json());

app.use(cors());

app.get('/friends', (req, res) => {
	res.send(friends);
});

app.post('/friends', (req, res) => {
	friends.push(req.body);
	res.send(friends);
});

const port = 5000;
app.listen(port, () => {
	console.log(`server listening on http://localhost:${port}`);
});
