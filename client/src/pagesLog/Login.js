import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../context/auth'

const API_URL = 'https://collective-app-2.herokuapp.com';

export default function Login() {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState(undefined);

	const navigate = useNavigate()

	const { storeToken, authenticateAdmin } = useContext(AuthContext)

	const handleSubmit = e => {
		e.preventDefault()
		const requestBody = { email, password }
		axios.post(`/api/auth/login`, requestBody)
			.then(response => {
				
				console.log('we have a token')
				const token = response.data.authToken
				// store the token
				storeToken(token)
				authenticateAdmin()
					.then(() => {
						// redirect to projects
						navigate('/behind-the-scences')
					})
			})
			.catch(err => {
				console.log(err)
			})
	}

	const handleEmail = e => setEmail(e.target.value)
	const handlePassword = e => setPassword(e.target.value)

	return (
		<> 
            <div className='signup-background'>
				<div className='sign-box'>
					<div>
						<h3>Login</h3>
					</div>

					<div>			
						<form onSubmit={handleSubmit}>
							<div className='signup-box-together'>
								<div className='signup-text-input'><label htmlFor="email">Email </label></div>
								<input className='signup-input-box'
								type="text"
								name='email'
								value={email}
								placeholder={email}
								onChange={handleEmail} />
							</div>

							<div className='signup-box-together'>
								<div className='signup-text-input'><label htmlFor="password">Password: </label></div>
								<input className='signup-input-box'
								type="password"
								name='password'
								value={password}
								placeholder='******'
								onChange={handlePassword} />
							</div>
							<div>
								<button type="submit" class="glow-on-hover">Log In</button>
							</div>
						</form>
            		</div>
					{errorMessage && <h3>{errorMessage}</h3>}

					<div>
						Don't have an account?<Link to='/signup'>Signup</Link>
					</div>
				</div>
            </div>
		</>
	)
}