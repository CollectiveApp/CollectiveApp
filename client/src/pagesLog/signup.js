import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const API_URL='http:localhost:5005'

export default function Signup() {

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState(undefined)

	const navigate = useNavigate()

	const handleSubmit = e => {
		
		e.preventDefault()
		const requestBody = { email, password, name }
		axios.post(`/${API_URL}/auth/signup`, requestBody)
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
            <div>
			<h1>Signup</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="email">Email </label>
				<input 
					type="text"
					name='email'
					value={email}
					onChange={handleEmail} />
				<label htmlFor="password">Password </label>
				<input
					type="password"
					name='password'
					value={password}
					onChange={handlePassword} />
				<label htmlFor="name">Admin name </label>
				<input
					type="text"
					name='name'
					value={name}
					onChange={handleName} />
				<button type="submit">Sign Up</button>
			</form>

			{errorMessage && <h5>{errorMessage}</h5>}
            </div>

            <div>
			<Link to='/login'>Login</Link>
            </div>
		</>
	)
}