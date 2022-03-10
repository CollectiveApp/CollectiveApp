import React, { useState, useEffect } from 'react'
import axios from 'axios'



const API_URL='https://collective-app-2.herokuapp.com';
const AuthContext = React.createContext()

function AuthProviderWrapper(props) {

	const [admin, setAdmin] = useState(null)
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	const storeToken = token => {
		// store this token in local storage
		localStorage.setItem('authToken', token)
	}

	const removeToken = () => {                    
		// Upon logout, remove the token from the localStorage
		localStorage.removeItem("authToken");
	}

	const logoutAdmin = () => {
		// update the state
		//removeToken()
		setIsLoggedIn(false)
		setAdmin(null)
	}



	const authenticateAdmin = () => {
		// check local storage
		const storedToken = localStorage.getItem('authToken')
		if (storedToken) {
			return axios.get(`/api/auth/verify`, { headers: { Authorization: `Bearer ${storedToken}` } })
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
		authenticateAdmin()
		authenticateAdmin()
		logoutAdmin() 
	}, [])

	return (
		<AuthContext.Provider value={{ isLoggedIn, admin, isLoading, storeToken, authenticateAdmin, logoutAdmin }}>
			{props.children}
		</AuthContext.Provider>
	)
}


export { AuthProviderWrapper, AuthContext }

