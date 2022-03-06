const Volunteer = require("../models/Volunteer");
const router = require("express").Router();

// create a volunteer
router.post('/create', (req, res, next) => {
    Volunteer.create(req.body)
      .then(volunteer => {
        console.log(volunteer)
      res.status(201).json(volunteer)
      })
      .catch(err => next(err))
  })

module.exports = router;