const Event = require("../models/Event");

const router = require("express").Router();

// get all events
router.get('/', (req, res, next) => {
  Event.find()
  .then(events => {
      res.status(200).json(events)
  })
});

// create new event

router.post('/', (req, res, next) => {
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