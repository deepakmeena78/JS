const express = require("express");
const urlRouter = require("./routers/url");
const { connectTomongoDB } = require("./connect");
const URL = require("./models/url");
const app = express();

const PORT = 3000;
connectTomongoDB('mongodb://localhost:27017/short-url')
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch(err => {
        console.error("MongoDB connection error:", err);
    });


app.use(express.json());
app.use("/", urlRouter);

app.get("/:short", async (req, res) => {
    const shortId = req.params.short;
    const entry = await URL.findOneAndUpdate(
        {
            shortId,
        },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now()
                }
            },
        }   
    );
    if (entry) {
        res.redirect(entry.redirectURL);
    } else {
        res.status(404).send("Short URL not found");
    }
});

app.listen(PORT, () => {
    console.log("Server is running successfully on port", PORT);
});
