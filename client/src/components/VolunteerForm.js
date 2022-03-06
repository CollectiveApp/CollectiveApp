import React from 'react'

export default function VolunteerForm() {
  return (
  <>  
    <div>VolunteerForm</div>
    <form>
            <label>Picture: </label>
                <input id="pictureUrl" name="pictureUrl"  type="file"/>
            <label>Name: </label>
                <input id="firstName" name="firstName"  type="text" placeholder='First Name'/>
                <input id="lastName" name="lastName"  type="text" placeholder='Last Name'/>
            <label>Address: </label>
                <input id="street" name="street"  type="text" placeholder='Street and Nr.'/>
                <input id="zip" name="zip"  type="number" placeholder='Zip Code'/>
                <input id="city" name="city"  type="text" placeholder='City'/>
            <label>Contact: </label>
                <input id="email" name="email"  type="email" placeholder='E-Mail'/>
                <input id="phone" name="phone"  type="number" placeholder='Phone'/>
            <label>From when to when do you have time? </label>
                <input id="timeFrom" name="timeFrom" type="date" placeholder='Can join from...'/>
                <input id="timeTo" name="timeTo" type="date" placeholder='...until'/>
            <label>With what are you experienced? Any special skills? </label>
                <input id="experience" name="experience" type="text" placeholder='Experience'/>
            <label>Can you bring tools? Which ones? </label>
                <input id="tools" name="tools" type="text" placeholder='tools'/>
            <label>Leave us a message</label>
                <input id="message" name="message" type="text" placeholder='Something you wanna tell us?'/>
    </form>
  </>  
  )
}
