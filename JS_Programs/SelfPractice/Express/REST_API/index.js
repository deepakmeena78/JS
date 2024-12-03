const express = require('express');
const fs = require('fs');
const users = require('./MOCK_DATA.json');

const app = express();
const PORT = 4000;

app.use(express.urlencoded({ extended: false }));

// Middleware to parse JSON
app.use(express.json());

// Route to return all users
app.get("/api/users", (req, res) => {
    return res.json(users);
});

// HTML page listing user names
app.get('/user', (req, res) => {
    const html = `
    <!DOCTYPE html>
    <html>
        <head>
            <title>User List</title>
        </head>
        <body>
            <ul>
                ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
            </ul>
        </body>
    </html>`;
    res.send(html);
});

// Route to return all users (duplicate)
app.get("/api/2", (req, res) => {
    return res.json(users);
});

// Routes with dynamic user ID
app
    .route("/api/3/:id")
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        return res.json(user);
    })
    .patch((req, res) => {
        return res.json({ status: "Pending" });
    })
    .delete((req, res) => {
        return res.json({ status: "Pending" });
    });

// Route for adding users (Pending)
app.post("/api/users", (req, res) => {
    const body = req.body;
    users.push({...body,id: users.length + 1});
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
        return res.json({ status: "SuccesssFul",id: users.length});

    })
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
