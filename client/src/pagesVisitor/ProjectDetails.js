import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

export default function ProjectDetails() {

 const { id } = useParams()

	const [project, setProject] = useState(null);

	useEffect(() => {
		axios.get(`/api/projects/${id}`)
			.then(response => {
				console.log(response)
				setProject(response.data)
			})
			.catch(err => console.log(err))
	}, [])

	return (
		<>
			{project === null ? <div>Loading ...</div> :
				<>
					<h1>ProjectDetails</h1>
					<h3>{project.projectName}</h3>
          <p>{project.projectLocation}</p>
					<p>{project.projectDescription}</p>
          <p>{project.projectStartDate}</p>
          <p>{project.projectEndDate}</p>
          <p>{project.projectGallery}</p>	
				</>
			}
    </>
	)
}
