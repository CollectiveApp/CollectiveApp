const { Schema, model } = require("mongoose");


const VolunteerSchema = new Schema(
  {
    // pictureUrl: String,
    firstName: {
        type: String,
        required: true},
    lastName: {
        type: String,
        required: true},
   
    street: String,        
    city: String,       
    zip: String,
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
     // choose out of the Project-DB
    projectAppliedFor:{
        type: Schema.Types.ObjectId,
        ref: 'Project'
    },
    timeFrom: String,
    timeTo: String,
    experience: {
        type: String,
        required: true
    },
    hasTools: Boolean,
    tools: String,
    personalMessage: String
  }
);

const Volunteer = model("Volunteer", VolunteerSchema);

module.exports = Volunteer;

