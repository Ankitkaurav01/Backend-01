const mongoose = require("mongoose");

const dbConnection = mongoose.connect("mongodb+srv://ankitkauravkaurav420:ankit1234@cluster0.muqw1.mongodb.net/"
).then(() => {
    console.log("Mongodb Connected Successfully");
}).catch(() => {
    console.log("Mongodb connection failed"+error); 
});

module.exports = dbConnection;