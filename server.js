//Import the node.js built-in 'http' module
const http = require('http');

//Import the 'app' module, in this case in instance of express
const app = require('./app');


//Set the port number for our server to listen to , using an environment variable PORT or defaulting to 3000
const port = process.env.PORT || 3000;

//Create an instance of a server using 'http' module, passing 'app' (Express app) as a request listener
const server = http.createServer(app);

//Make server listen on specified port
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});