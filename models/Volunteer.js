const { Schema, model } = require("mongoose");


const VolunteerSchema = new Schema(
  {
    pictureUrl: String,
    firstName: {
        type: String,
        required: true},
    lastName: {
        type: String,
        required: true},
    address: {
            street: String,        
            city: String,       
            zip: String
          },
    contact: {
        email: {
            type: String,
            required: true
            },
        phone: {
            type: Number,
            required: true
            }
        },
     // choose out of the Project-DB
    projectInterested:[{
        type: Schema.Types.ObjectId,
        ref: 'Project'
    }],
    timeframe:{
        timeFrom: String,
        timeTo: String
    },
    experience: {
        type: String,
        required: true
    },
    tools: String,
    personalMessage: String
  }
);

const Volunteer = model("Volunteer", VolunteerSchema);

module.exports = Volunteer;

