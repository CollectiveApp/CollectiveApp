const { Schema, model } = require("mongoose");


const ProjectSchema = new Schema(
  {
    projectName: String,
    projectLocation: String,
    projectStartDate: Date ,
    projectEndDate: Date,
    projectDescription: String,
    projectGallery: String 
  },
  {
    timestamps: true,
  }
);

const Project = model("Project", ProjectSchema);

module.exports = Project;

