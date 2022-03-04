import React, { useState, useEffect } from 'react'
import axios from 'axios'


const API_URL='hhtp://localhost:5005';
const AuthContext = React.createContext()

function AuthProviderWrapper(props) {

	const [admin, setAdmin] = useState(null)
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	const storeToken = token => {
		// store this token in local storage
		localStorage.setItem('authToken', token)
	}

	const logoutAdmin = () => {
		// remove the token from local storage
		localStorage.removeItem('authToken')
		// update the state
		setIsLoggedIn(false)
		setAdmin(null)
	}



	const verifyStoredToken = () => {
		// check local storage
		const storedToken = localStorage.getItem('authToken')
		if (storedToken) {
			return axios.get(`/${API_URL}/auth/verify`, { headers: { Authorization: `Bearer ${storedToken}` } })
				.then(response => {
					const admin = response.data
					setAdmin(admin)
					setIsLoggedIn(true)
					setIsLoading(false)
				})
				.catch(err => {
					// the token is invalid
					setIsLoggedIn(false)
					setAdmin(null)
					setIsLoading(false)
				})
		} else {
			// there is no token in local storage
			setIsLoading(false)
			setIsLoggedIn(false)
			setAdmin(null)
		}
	}

	useEffect(() => {
		// check if we have an auth token stored
		verifyStoredToken()
		authenticateAdmin()
	}, [])

	return (
		<AuthContext.Provider value={{ isLoggedIn, admin, isLoading, storeToken, authenticateAdmin, verifyStoredToken, logoutAdmin }}>
			{props.children}
		</AuthContext.Provider>
	)
}

export { AuthProviderWrapper, AuthContext }

