const Volunteer = require("../models/Volunteer");
const Project = require("../models/Project")
const router = require("express").Router();

// create a volunteer
router.post('/create', (req, res, next) => {
    Volunteer.create(req.body)
      // when the new volunteer is created, the project needs to be found and its volunteerApplications updated with the
      // ID of newly created volunteer
      .then(dbVolunteer => {
        console.log(dbVolunteer)
        Project.findByIdAndUpdate(dbVolunteer.projectAppliedFor, { $push: { volunteerApplications: dbVolunteer._id }})
        .then(updatedProject => {
        console.log(updatedProject)
        res.status(201).json(updatedProject)
      })
      .catch(err => next(err))
  })
  .catch(err => next(err))
})

// get all volunteers
router.get('/', (req, res, next) => {
  Volunteer.find()
    .populate('projectAppliedFor')
    .then(applications => {
      res.status(200).json(applications)
    })
    .catch(err => next(err))
  });

module.exports = router;