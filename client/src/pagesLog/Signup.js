import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const API_URL='https://collective-app-2.herokuapp.com'

export default function Signup() {

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState(undefined)

	const navigate = useNavigate()

	const handleSubmit = e => {
		
		e.preventDefault()
		const requestBody = { email, password, name }
		axios.post(`/api/auth/signup`, requestBody)
			.then(response => {
				
				navigate('/login')
			})
			.catch(err => {
				const errorDescription = err.response.data.message
				setErrorMessage(errorDescription)
			})
	}

	const handleEmail = e => setEmail(e.target.value)
	const handleName = e => setName(e.target.value)
	const handlePassword = e => setPassword(e.target.value)
	

	return (
		<>
			<div className='signup-background'>
            	<div className='sign-box'>
					<div>
						<h3>Signup</h3>
					</div>

					<div>
						<form onSubmit={handleSubmit}>
							<div className='signup-box-together'>
								<div className='signup-text-input'><label htmlFor="email">Email </label></div>
								<input className='signup-input-box'
								type="text"
								name='email'
								value={email}
								placeholder='foo@foo.com'
								onChange={handleEmail} />
							</div>

							<div className='signup-box-together'>
								<div className='signup-text-input'><label htmlFor="password">Password </label></div>				
								<input className='signup-input-box'
								type="password"
								name='password'
								value={password}
								placeholder='******'
								onChange={handlePassword} />
							</div>

							<div className='signup-box-together'>
								<div className='signup-text-input'><label for="cpassword">Confirm Password</label></div>
          						<input type="password" id="cpassword" name="cpassword" placeholder='******' className='signup-input-box' required="required"/>
							</div>
							<div className='signup-box-together'>
				  				<div className='signup-text-input'><label htmlFor="name">Admin name </label></div>
								<input className='signup-input-box'
								type="text"
								name='name'
								value={name}
								placeholder='Foo'
								onChange={handleName} />
							</div>
							<div>
								<button class="glow-on-hover" type="submit">Sign Up</button>
							</div>
						</form>
					</div>

					{errorMessage && <h5>{errorMessage}</h5>}
            	

            		<div>
						Already have an Account?<Link to='/login'>Login</Link>
            		</div>
				</div>
			</div>
		</>
	)
}