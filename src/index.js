const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

const ufl = -1000000;
const ofl = 1000000;
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
    // your code goes here
app.post("/add", (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    let notNumber = false;
    if (isNaN(num1) || isNaN(num2)) {
        notNumber = true;
    }
    const result = num1 + num2;
    let message = "the sum of given two numbers";
    let status = "success";
    if (notNumber) {
        message = "Invalid data types";
        status = "error";
    }
    if (num1 < ufl || num2 < ufl || result < ufl) {
        message = "Underflow";
        status = "error";
        notNumber = true;
    }
    if (num1 > ofl || num2 > ofl || result > ofl) {
        message = "Overflow";
        status = "error";
        notNumber = true;
    }
    if (notNumber) {
        res.send(JSON.stringify({ status: status, message: message }));
    } else {
        res.send(JSON.stringify({ status: status, message: message, result: result }));
    }

})


app.post("/sub", (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    let notNumber = false;
    if (isNaN(num1) || isNaN(num2)) {
        notNumber = true;
    }
    let result = undefined;
    if (!notNumber) {
        result = num1 - num2;
    }
    let message = "the sum of given two numbers";
    let status = "success";
    if (notNumber) {
        message = "Invalid data types";
        status = "error";
    }
    if (num1 < ufl || num2 < ufl || result < ufl) {
        message = "Underflow";
        status = "error";
        notNumber = true;
    }
    if (num1 > ofl || num2 > ofl || result > ofl) {
        message = "Overflow";
        status = "error";
        notNumber = true;
    }
    if (notNumber) {
        res.send(JSON.stringify({ status: status, message: message }));
    } else {
        res.send(JSON.stringify({ status: status, message: message, result: result }));
    }

})


app.post("/multiply", (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    let notNumber = false;
    if (isNaN(num1) || isNaN(num2)) {
        notNumber = true;
    }
    let result = undefined;
    if (!notNumber) {
        result = num1 * num2;
    }
    let message = "the sum of given two numbers";
    let status = "success";
    if (notNumber) {
        message = "Invalid data types";
        status = "error";
    }
    if (num1 < ufl || num2 < ufl || result < ufl) {
        message = "Underflow";
        status = "error";
        notNumber = true;
    }
    if (num1 > ofl || num2 > ofl || result > ofl) {
        message = "Overflow";
        status = "error";
        notNumber = true;
    }
    if (notNumber) {
        res.send(JSON.stringify({ status: status, message: message }));
    } else {
        res.send(JSON.stringify({ status: status, message: message, result: result }));
    }

})


app.post("/div", (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    let notNumber = false;
    if (isNaN(num1) || isNaN(num2)) {
        notNumber = true;
    }
    let result = undefined;
    let message = "the sum of given two numbers";
    let status = "success";
    if (notNumber) {
        message = "Invalid data types";
        status = "error";
    }
    if (!notNumber) {
        if (num2 === 0) {
            message = "Cannot divide by zero";
            notNumber = true;
        } else {
            result = num1 / num2;
        }
    }
    if (num1 < ufl || num2 < ufl || result < ufl) {
        message = "Underflow";
        status = "error";
        notNumber = true;
    }
    if (num1 > ofl || num2 > ofl || result > ofl) {
        message = "Overflow";
        status = "error";
        notNumber = true;
    }
    if (notNumber) {
        res.send(JSON.stringify({ status: status, message: message }));
    } else {
        res.send(JSON.stringify({ status: status, message: message, result: result }));
    }

})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;