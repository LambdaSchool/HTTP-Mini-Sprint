#Basics on HTTP
reducers is function that return a part of the state which is data. 
Payload is the action associated with the data

request is requesting data from a server; 
servers are stateless as they do not remember who makes the request;
servers do not remember clients 

HTTP - hypertext  Text Transfer Protocol
Protocol - set of rules or functions for communication on the web and 
send data of plain text and agreement on language. Hypertext makes the 
text smarter 

Axios - Promise based HTTP client for browser and node.js. It will let Redux perform 
promise based actions. 

Actions - actions are 'Verbs' are rules we agree on to convey intention. They 
are also known as 'Methods'.

GET - an action which means I need to get information from the server. THe brower 
determines that the action is Get. The rest of the actions are determined by 
the client 

POST - an action which means I need to create something called 'Resource' on the server

PUT/PATCH - an action which means I need to update or change the Resource or part 
of the Resouce. This includes changing a password of an object. These actions are also more guidelines 

DELETE - an action which means I need to remove a Resource from the server.

OPTIONS - Client/server first interactions which determines which actions are 
available

note: 3 ways to send data to server: by adding information to the url itself. 

HTTP Status Code = information we get back from the server such as whether our Get 
action suceeded or fail. 
- We should inspect information we get back from the server to see if we get a status 
code. We need to always add status codes in our server. This is extremely important
code start from 100. 200 is okay and 201 means created sucessfully. 300s means data 
has been changed. 400s and 500s means something has failed. 400s means the problem 
is on the client side so check client code. 500 means something happened on the server such 
as server being down or forced down. Most of the time we deal with 200, 400 or 500 code.
 

CRUD - Tied to the four main actions get, post, put and delete
C - CREATE - POST
R - READ - GET
U - UPDATE - PUT/PATCH
D - DELETE - DELETE

These are guidelines only as there other ways to organize the backend. 

Redux-Promise: It will use an action creator and its library will get Redux-Promise and perform 
the promises and catch will be handled. 

JSON - server has it own package.json and so we need to run npm install on the outer files as well as 
the inner react app itself 

run 'node server.js' on terminal and will say server listening on port 5000. When we commincate with 
another computer, we needs its address. More specifically, the port is basically the apartment numbers or unit in the apartment. the ip address is the address of the computer. It secures and divides your computer and allow you to monitor activity on a particular port. You can specify port 
by localhost: followed by port number. For this example use localhost:5000 and localhost:5000/friends.
Other protocols can be used such as chrome protocols e.g chrome://. Use the JSONView chrome extension 
to make the server css look nicer. Server is running on port 5000 and client is running on port 3000. 

endpoint - url to a particular resource on the server 

AJAX - used to be a acronymn that represensts a process to update webpage without reloading entire webpage

Asynchronous 
JavaScript
And 
XML - extensive markup language used to create languages and define tags. 

JSON - Javascript object with strings to transfer data from client to the server. 