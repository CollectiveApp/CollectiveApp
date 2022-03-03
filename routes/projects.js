const Project = require("../models/Project");

const router = require("express").Router();

// get all projects
router.get('/', (req, res, next) => {
  Project.find()
    .then(projects => {
    res.status(200).json(projects)
  })
});

// create a project
router.post('/create', (req, res, next) => {
  const { projectName,
          projectLocation,
          projectStartDate,
          projectEndDate,
          projectDescription,
         } = req.body
  Project.create({ projectName,
          projectLocation,
          projectStartDate,
          projectEndDate,
          projectDescription,
           })
    .then(project => {
    res.status(201).json(project)
    })
    .catch(err => next(err))
})

// delete a project
router.delete('/:id', (req, res, next) => {
  Project.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json({ message: 'project deleted' })
    })
    .catch(err => next(err))
});

module.exports = router;