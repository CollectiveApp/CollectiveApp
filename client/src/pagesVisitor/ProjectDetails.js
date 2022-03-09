import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import EventNavbar from '../components/EventNavbar';

export default function ProjectDetails() {

const { id } = useParams()
const [project, setProject] = useState(null);
const storedToken = localStorage.getItem('authToken')

	useEffect(() => {
		axios.get(`/api/projects/${id}`, { headers: { Authorization: `Bearer ${storedToken}` } })
			.then(response => {
				console.log(response)
				setProject(response.data)
			})
			.catch(err => console.log(err))
	}, [])

	return (
	<>
		<div>
			<EventNavbar />
		</div>
			{project === null ? <div>Loading ...</div> :
			<>
				{project.projectImageUrl.map(image => { 
					console.log(image)
					return (
					<div key={project._id}>
					<img src={image} alt="ProjectPictures"/>
					</div>
					)
					}
				)}
				<h1>{project.projectName}</h1>
          		<h4>Location: {project.projectLocation}</h4>
          		<h5>Date: {project.projectStartDate}  -  {project.projectEndDate}</h5>
				<p>What the project is about: {project.projectDescription}</p>
				<p>Looking for: {project.projectSkillsNeeded}</p>
				<div>
				<h4>Wanna Participate?</h4>
				<h5>Click</h5>
				<h5>Pfeil nach unten</h5>
				<Link to={`/volunteer/${project._id}`}>Volunteer</Link>
				</div>
			</>
			}
    </>
	)
}
