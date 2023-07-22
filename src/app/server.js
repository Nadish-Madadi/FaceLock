const express = require("express");
const saveImages = require("../backend/helpers/saveImages");

const app = express();
app.use(express.json());

app.post("/upload", (req, res) => {
    const frames = JSON.stringify(req.body.frames);
    try {
        const returnedId = saveImages({
            user: req.body.username,
            frames
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

app.listen(3000, (err) => {
    if (err) {
      console.error(`Error occurred while starting: ${err}`);
    } else {
      console.log("Server started on port 3000!");
    }
});