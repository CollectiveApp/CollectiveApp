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
  .catch(err => next(err))
});

// upload file to cloudinary
router.post('/upload', fileUploader.array("projectImageUrls"), (req, res, next) => {
  console.log("file is:", req.files)
  if(!req.files) {
    next(new Error("No file uploaded!"))
    return
  }
  const urls = []
  for (let file of req.files){
    const { path } = file;
    urls.push(path)
  }
  console.log("urls", urls)
  res.json({ secure_url: urls })
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
    .populate('volunteerApplications')
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
          projectDescription,
          projectSkillsNeeded} = req.body
  Project.findByIdAndUpdate(req.params.id, {
          projectName,
          projectLocation, 
          projectStartDate, 
          projectEndDate, 
          projectDescription,
          projectSkillsNeeded
  }, { new: true })
    .then(updatedProject => {
      res.status(200).json(updatedProject)
    })
    .catch(err => next(err))
});


module.exports = router;