const mongoose = require("mongoose");

const ResultOfTrips = mongoose.Schema({
  From: {
    type: String,
    required: true,
  },
  To: {
    type: String,
    required: true,
  },
  Option: {
    type: String,
    required: true,
  },
  DateOfDeparture: {
    type: String,
    required: true,
  },
  DateReturn: {
    type: String,
    required: false,
  },
  Time: {
    type: String,
    required: true,
  },
  Places: {
    type: String,
    required: true,
  },
});
