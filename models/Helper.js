const { Schema, model } = require("mongoose");

const helperSchema = new Schema(
  {
    profilePictureUrl: {
        type: String,
        default: '/images/profile_default.jpeg'
    },
    firstName:{
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: Number,
    project: [
        {
        // choose out of the Projects DB that is created by projectsModel
        type: Schema.Types.ObjectId,
        ref: 'Project'
    },
    ],
    experience: {
        type: String,
        required: true
    },
    tools: String,
    message: String
  }
);

const Helper = model("Helper", helperSchema);

module.exports = Helper;