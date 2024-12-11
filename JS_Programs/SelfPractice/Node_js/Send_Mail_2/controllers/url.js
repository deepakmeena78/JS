const shortid = require("shortid");
const URL = require("../models/url");

async function GeneratedShortURL(req, res) {
    const body = req.body;

    if (!body.URL)
        return res.status(400).json({ error: "Wrong ...?" })
    const shortId = shortid();
    await URL.create({
        shortId: shortId,
        redirectURL: body.url,
        visitHistory: [],
    });
    return res.json({ id: shortId });
}

module.exports = { GeneratedShortURL };