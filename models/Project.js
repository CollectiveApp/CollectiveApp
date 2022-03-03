const { Schema, model } = require("mongoose");


const ProjectSchema = new Schema(
  {
    projectName: String,
    projectLocation: String,
    projectStartDate: String,
    projectEndDate: String,
    projectDescription: String,
    projectGallery: String 
  },
  {
    timestamps: true,
  }
);

const Project = model("Project", ProjectSchema);

module.exports = Project;

