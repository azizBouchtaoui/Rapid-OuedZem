const mongoose = require("mongoose");

const Times = mongoose.Schema({
  time: {
    type: String,
    required: true,
  },
});

const Time = mongoose.model("Time", Times, "Time");
module.exports = Time;
