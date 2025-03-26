const mongoose = require("mongoose");


const schema = mongoose.Schema({
    userName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        reuired: true
    }, 
    phone:{
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const model = mongoose.model("details", schema);

module.exports = model;