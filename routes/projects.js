const Project = require("../models/Project");

const router = require("express").Router();

// get all projects
router.get('/', (req, res, next) => {
  Project.find()
  .then(projects => {
      res.status(200).json(projects)
  })
});

// create new project
// create a project
router.post('/', (req, res, next) => {
  const { projectName,
          projectLocation,
          projectStartDate,
          projectEndDate,
          projectDescription,
          projectGallery } = req.body
  Project.create({ title, description })
    .then(project => {
      res.status(201).json(project)
    })
    .catch(err => next(err))
})

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;