const Event = require("../models/Event");
const router = require("express").Router();
// require Cloudinary
const fileUploader = require('../config/cloudinary.config');

// get all events
router.get('/', (req, res, next) => {
  Event.find()
  .then(events => {
    console.log('this are events', events)
      res.status(200).json(events)
  })
});
// upload file to cloudinary
router.post('/upload', fileUploader.single("eventPicture"), (req, res, next) => {
  console.log("file is:", req.file)
  if(!req.file) {
    next(new Error("No file uploaded!"))
    return
  }
  console.log("urls", url)
  res.json({ secure_url: url })
})

// create new event

router.post('/create', (req, res, next) => {
  const { eventName, eventLocation, eventDate, eventTime, eventType,
        eventPicture, eventDescription, eventOutdoor } = req.body
  Event.create({ eventName, eventLocation, eventDate, eventTime, eventType, eventPicture, eventDescription, eventOutdoor})
    .then(event => {
      res.status(201).json(event)
    })
    .catch(err => next(err))
})

//get a specific event

router.get('/:id', (req, res, next) => {
    Event.findById(req.params.id)
      .then(event => {
        // check for a valid mongoobject id
        // mongoose.Types.ObjectId.isValid(<id>) 
        if (!event) {
          res.status(404).json(event)
        } else {
          res.status(200).json(event)
        }
      })
});
  
// update the event

router.put('/:id', (req, res, next) => {
    const { eventName, eventLocation, eventDate, eventTime, eventType,
        eventPicture, eventDescription, eventOutdoor } = req.body
    Event.findByIdAndUpdate(req.params.id,
        { eventName, eventLocation, eventDate, eventTime, eventType, eventPicture, eventDescription, eventOutdoor},
        { new: true })
      .then(updatedEvent => {
        res.status(200).json(updatedEvent)
      })
      .catch(err => next(err))
});
  
// delete the event

router.delete('/:id', (req, res, next) => {
    Event.findByIdAndDelete(req.params.id)
      .then(() => {
        res.status(200).json({ message: 'event deleted' })
      })
      .catch(err => next(err))
});




module.exports = router;