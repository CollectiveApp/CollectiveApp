import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../context/auth'

const API_URL = 'http://localhost:5005';

export default function Login() {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState(undefined);

	const navigate = useNavigate()

	const { storeToken, authenticateAdmin , verifyStoredToken } = useContext(AuthContext)

	const handleSubmit = e => {
		e.preventDefault()
		const requestBody = { email, password }
		axios.post(`/${API_URL}/auth/login`, requestBody)
			.then(response => {
				
				console.log('we have a token')
				const token = response.data.authToken
				// store the token
				storeToken(token)
				authenticateAdmin()
				verifyStoredToken()
					.then(() => {
						// redirect to projects
						navigate('/behind-the-scences')
					})
			})
			.catch(err => {
				const errorDescription = err.response.data.message
				setErrorMessage(errorDescription)
			})
	}

	const handleEmail = e => setEmail(e.target.value)
	const handlePassword = e => setPassword(e.target.value)

	return (
		<> 
            <div>
			<h1>Login</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="email">Email </label>
				<input
					type="text"
					name='email'
					value={email}
					onChange={handleEmail} />
				<label htmlFor="password">Password: </label>
				<input
					type="password"
					name='password'
					value={password}
					onChange={handlePassword} />
				<button type="submit">Log In</button>
			</form>

			{errorMessage && <h5>{errorMessage}</h5>}
            </div>

			<div>
				<p>Don't have an account yet?</p>
			    <Link to='/signup'>Signup</Link>
            </div>
		</>
	)
}