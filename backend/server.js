const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend is running");
});

const programs = [
    {
        id: 1,
        title: "Web Development"
    },
    {
        id: 2,
        title: "Java + DSA"
    }
];

app.get("/programs", (req, res) => {
    res.json(programs);
});

app.post("/contact", (req, res) => {

    console.log(req.body);

    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    // Email validation
    if(!email.includes("@")){
        return res.status(400).json({
            message: "Invalid email address"
        });
    }

    // Phone validation
    if(phone.length !== 10){
        return res.status(400).json({
            message: "Phone number must be 10 digits"
        });
    }

    // Message validation
    if(message.length < 5){
        return res.status(400).json({
            message: "Message too short"
        });
    }

    // Success response
    res.status(200).json({
        message: "Form submitted successfully"
    });

});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});