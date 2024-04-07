let express = require("express");
let path = require("path");

let app = express();

// Define your '/test' route
app.get("/test", (req, resp) => {
    resp.send(`<h1>Hello</h1>`);
});

// Serve static files from the 'chatbot' directory
app.use(express.static(path.join(__dirname, 'witch-fe')));

// Define a catch-all route to serve 'index.html' for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'witch-fe', 'index.html'));
});

// Start the server
app.listen(5390, () => {
    console.log("Server running at http://localhost:5390");
});