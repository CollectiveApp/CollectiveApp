import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
	console.log(project)
	return (
	<>
	{project === null ? <div>Loading ...</div> :
	<>
		<EventNavbar />
		<div className='bg-overlay page-container'> 
		<div className='heading-projectdetail-container'></div>
		<div className='project-container'>
			<h1 className='project-title'>{project.projectName}</h1>
			<hr className='line'></hr>
			<div className='carousel-wrapper'>
			<Carousel useKeyboardArrows autoPlay infiniteLoop>
				{project.projectImageUrls.map(image => { 
					return (
						<div className='carousel-single-image' key={project._id}>
							<img src={image} alt="ProjectPictures"/>
						</div>
					)
				}
				)}
			</Carousel>
			</div>
			<div className='project-detail-container'>
				<h4><img className='map-icon' src='/images/placeholder.png' alt=''/>{project.projectLocation}</h4>
				<h5>{project.projectStartDate}  -  {project.projectEndDate}</h5>
				<h4>What the project is about: </h4>
				<p>{project.projectDescription}</p>
				<h4>Looking for:</h4>
				<p>{project.projectSkillsNeeded}</p>
			</div>
			<hr className='line'></hr>
			<div className='click-volunteer-container'>
				<h4 className='project-text'>Wanna Participate?</h4>
				<h5 className='project-text'>Click</h5>
				<img className='arrow-icon' src='/images/down-arrow.png' alt='pfeil'/><br></br>
				<Link className='project-link' to={`/volunteer/${project._id}`}>Volunteer</Link>
			</div>
		</div>
		</div>
	</>
	}
	</>
	)
}
