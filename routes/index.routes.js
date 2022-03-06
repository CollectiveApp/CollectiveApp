const router = require("express").Router();
const Admin = require('../models/Admin')
const Event = require('../models/Event')
const Volunteer = require('../models/Volunteer')
const Project = require('../models/Project')


router.get("/", (req, res, next) => {
  res.json("All good in here");
});



module.exports = router;
