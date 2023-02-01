const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const api = require("./api.js");
const app = express();
const port = 3000;

// Serve all files under /client as static files
// So the client app (index.html) is served
app.use(express.static(path.join(__dirname, "../client")));

// Parse incoming messages as JSON and pass those 
// in `req.body` to the request controllers
app.use(bodyParser.json())

// Map all request controllers defined in api.js to be called
// via the method name as HTTP POST requests.
Object.keys(api).forEach(methodName => {
    app.post(`/${methodName}`, api[methodName]);
});

// Listen for incoming HTTP messages on the given port
app.listen(port, () => {
    console.log(`\n🚀 App started on port ${port}!`);
});