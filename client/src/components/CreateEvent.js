import React, {useState} from 'react'
import axios from 'axios'
import Maps from './Maps';
import PlacesAutocomplete from './autocompleteBar';
import serviceEvent from '../api/serviceEvent'



export default function CreateEvent(props) {

  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventDate, setEventDate] = useState('')
  const [eventTime, setEventTime] = useState('')
  const [eventType, setEventType] = useState('')
  const [eventPicture, setEventPicture] = useState([])
  const [eventLocation, setEventLocation] = useState('')
  const [eventOutdoor, setEventOutdoor] = useState(false)

  const options = [
    {label:'All', value:'all'},
    {label: 'Music', value: 'music' },
    {label: 'Food', value: 'food'},
    {label: 'Sports', value: 'sports' },
    {label: 'Arts', value: 'arts' },
    {label: 'Building', value: 'building' },
    {label: 'Meetups', value: 'meetups' },
    {label: 'Social Volunteer', value: 'social volunteer' },
]
  
  const handleSubmit = e => {
		e.preventDefault()
		const requestBody = { eventName, eventDescription, eventDate, eventTime, eventType, eventPicture, eventLocation, eventOutdoor }
		axios.post(`/api/event/create`, requestBody)
    .then(response => {
      console.log(response)
    })

			.catch(err => console.log(err))
      setEventName('')
      setEventDescription('')
      setEventDate('')
      setEventTime('')
      setEventType('')
      setEventLocation('')
      setEventPicture([])
      setEventOutdoor(false)

      props.refreshEvents()
	}

  const handleFileUpload = e => {
    // console.log("The file to be uploaded is: ", e.target.files[0]);
    const uploadData = new FormData();
    uploadData.append("eventPicture", e.target.files[0]);
    serviceEvent
      .uploadImage(uploadData)
      .then(response => {
        setEventPicture([response.secure_url, ...eventPicture]);
      })
      .catch(err => console.log("Error while uploading the file: ", err));
  };

  const handleEventName = e => setEventName(e.target.value)
  const handleEventDescription = e => setEventDescription(e.target.value)
  const handleEventDate= e => setEventDate(e.target.value)
  const handleEventTime = e => setEventTime(e.target.value)
  const handleEventType = e => setEventType(e.target.value)
  const handleEventLocation = e => setEventLocation(e.target.value)
  const handleCheckBox = e => setEventOutdoor(e.target.checked)

  return (
    <>
    <h2>Create a new Event</h2>
    <form  className="popUp-form" onSubmit={handleSubmit} encType="multipart/form-data">
      <div className="popUp-container">
        <label className='label-popUp' htmlFor='Name'>Name</label>
        <input className="inputfield" type="text" value={eventName} onChange={handleEventName}></input>
        <label className='label-popUp' htmlFor='Description'>Description</label>
        <input className="inputfield" type="text" value={eventDescription} onChange={handleEventDescription}></input>
        <label className='label-popUp' htmlFor='Date'>Date</label>
        <input className="inputfield date-input" type="date" value={eventDate} onChange={handleEventDate}></input>
        <label className='label-popUp' htmlFor='Time'>Time</label>
        <input className="inputfield" type="time" value={eventTime} onChange={handleEventTime}></input>
        <label className='label-popUp' htmlFor='Location'>Location</label>
        <input className="inputfield" type="text" value={eventLocation} onChange={handleEventLocation}></input>
        <label className='label-popUp'>Event Type</label>
        <label>
            <select className="inputfield" value={eventType} onChange={handleEventType}>
                {options.map((option) => (
                <option value={option.value}>{option.label}</option>
                ))}
            </select>
        </label>
        {/* <div>
            <h2>Upload images</h2>
            <input id="eventImage" name="eventPicture" type="file" onChange={(e) => handleFileUpload(e)}/>
        </div> */}
        {/* <div>
            <input id="eventImages" name="eventPicture" type="file" onChange={(e) => handleFileUpload(e)} />
        </div>
        <div>
            <input id="eventImages" name="eventPicture" type="file" onChange={(e) => handleFileUpload(e)} />
        </div>
         <div>
            <input id="eventImages" name="eventPicture" type="file" onChange={(e) => handleFileUpload(e)} />
        </div> */}
        
            <label className='label-popUp' htmlFor='Outdoor'>Outdoor</label>
            <input type="checkBox" value={eventOutdoor} onChange={handleCheckBox}/>
        
        
        
        {/* <PlacesAutocomplete eventLocation={eventLocation} setEventLocationProp={setEventLocation} />
        <div>
          <Maps />
        </div> */}
        
      </div>        
        <button className="popUp-btn" type='submit'>+</button>
    </form>
    </>
  )
}