const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors()); 
app.use(cors()); 
app. use (cors());
manisha

app.get("/operation", (req, res) => {
    res.json({ operation_code: "OP12345" });
});

app.post('/submit', (req, res) => {
    const { userId, email, rollNumber, data } = req.body;

    if (!userId || !email || !rollNumber || !data) {
        return res.status(400).json({ status: "Error", message: "Missing required fields" });
    }

    const numbers = data.filter(item => typeof item === "number");
    const alphabets = data.filter(item => typeof item === "string");

    res.json({
        status: "Success",
        userId,
        college_email_id: email,
        college_roll_number: rollNumber,
        numbers,
        alphabets
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
