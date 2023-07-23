const express = require("express");
const saveImages = require("../backend/helpers/saveImages");

const app = express();
app.use(express.json());

app.post("/login", (req, res) => {
    collection.findOne({ username: req.body.username})
        .then((res) => {
            bcrypt.compare(req.body.password, hash, function(err, result) {
                if (result) {
                    return res.status(200).json({
                        message: "Success",
                    })
                } else {
                    return res.status(403).json({
                        message: "Login failed",
                        _id: returnedId
                    })
                }
            });
        });
    
})

app.post("/upload", (req, res) => {
    const frames = JSON.stringify(req.body.frames);
    bcrypt.hash(req.body.password, 10, function(err, hash) {
        try {
            const returnedId = saveImages({
                username: req.body.username,
                frames,
                password: hash
            });
            return res.status(200).json({
                message: "Success",
                _id: returnedId
            })
        } catch (e) {
            return res.status(400).json({
                error: "Error saving to database.",
                stack: e
            })
        }
    });
    
});

app.listen(3000, (err) => {
    if (err) {
      console.error(`Error occurred while starting: ${err}`);
    } else {
      console.log("Server started on port 3000!");
    }
});