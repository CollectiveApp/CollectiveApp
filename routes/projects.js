const Project = require("../models/Project");
// require Cloudinary
const fileUploader = require('../config/cloudinary.config');
const router = require("express").Router();

// get all projects
router.get('/', (req, res, next) => {
  Project.find()
    .then(projects => {
    res.status(200).json(projects)
  })
});

// upload file to cloudinary
router.post('/upload', fileUploader.single("projectImageUrl"), (req, res, next) => {
  console.log("file is:", req.file)
  if(!req.file) {
    next(new Error("No file uploaded!"))
    return
  }
  res.json({ secure_url: req.file.path })
})

// create a project
router.post('/create', (req, res, next) => {
  Project.create(req.body)
    .then(project => {
      console.log(project)
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


//get specific project
router.get('/:id', (req, res, next) => {
  Project.findById(req.params.id)
    .then(project => {
      if (!project) {
        res.status(404).json(project)
      } else {
        res.status(200).json(project)
      }
    })
    .catch(err => next(err))
});
// edit a project
router.put('/:id', (req, res, next) => {
  const { projectName, 
          projectLocation, 
          projectStartDate, 
          projectEndDate, 
          projectDescription} = req.body
  Project.findByIdAndUpdate(req.params.id, {
          projectName,
          projectLocation, 
          projectStartDate, 
          projectEndDate, 
          projectDescription
  }, { new: true })
    .then(updatedProject => {
      res.status(200).json(updatedProject)
    })
    .catch(err => next(err))
});


module.exports = router;