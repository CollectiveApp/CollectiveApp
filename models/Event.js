const { Schema, model } = require("mongoose");


const EventSchema = new Schema(
  {
    eventName: String,
    eventLocation: String,
    eventDate: String,
    eventTime: String,
    eventDescription: String,
    eventType: String,
    eventPicture: [String],
    eventOutdoor: Boolean,
  },
  {
    timestamps: true,
  }
);

const Event = model("Event", EventSchema);

module.exports = Event;