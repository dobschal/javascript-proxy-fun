// All methods defined here, are public available as API for the client
module.exports = {
    saveUsername(req, res) {
        console.log("Request: ", req.body);
        // TODO: save username
        res.send({
            success: "true",
            message: "Saved username."
        });
    },
    log(req, res) {
        console.log("Log: ", req.body);
        res.send({
            success: "true"
        });
    }
};