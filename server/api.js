module.exports = {
    saveUsername(req, res) {
        console.log("Request: ", req.body);
        // save username
        res.send({
            success: "true",
            message: "That was nice!"
        });
    },
    log(req, res) {
        console.log("Log: ", req.body);
        res.send({
            success: "true"
        });
    }
};