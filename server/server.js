const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const api = require("./api.js");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "../client")));
app.use(bodyParser.json())

Object.keys(api).forEach(methodName => {
    app.post(`/${methodName}`, api[methodName]);
});

// app.post("/saveUsername", (req, res) => {
//     console.log("Request: ", req.body);
//     // save username
//     res.send({
//         success: "true",
//         message: "That was nice!"
//     });
// });

app.listen(port, () => {
    console.log(`\n🚀 App started on port ${port}!`);
});