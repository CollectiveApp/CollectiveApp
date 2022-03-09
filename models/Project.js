const { Schema, model } = require("mongoose");


const ProjectSchema = new Schema(
  {
    projectName: String,
    projectLocation: String,
    projectStartDate: String,
    projectEndDate: String,
    projectDescription: String,
    projectSkillsNeeded: String,
    projectImageUrls: [String],
    volunteerApplications: [{
      type: Schema.Types.ObjectId,
      ref: 'Volunteer'
    }]
  },
  {
    timestamps: true,
  }
);

const Project = model("Project", ProjectSchema);

module.exports = Project;

