import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { Oval } from 'react-loading-icons';

const url = 'https://course-api.com/react-tabs-project';

function App() {
	//**************** variables ****************//
	const [loading, setLoading] = useState(true);
	const [jobs, setJobs] = useState([]);
	const [value, setValue] = useState(0);

	//**************** functions ****************//
	const fetchJobs = async () => {
		try {
			const response = await fetch(url);
			const newJobs = await response.json();
			setJobs(newJobs);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			console.log(error);
		}
	};

	useEffect(() => {
		fetchJobs();
	}, []);

	if (loading) {
		return (
			<section className='section loading'>
				<Oval
					height='5em'
					width='5em'
					fill='transparent'
					stroke='#102A42'
					strokeWidth={2}
				/>
				<h4>Loading . . .</h4>
			</section>
		);
	}
	const { company, dates, duties, title } = jobs[value];
	return (
		<section className='section'>
			<div className='title'>
				<h2>experience</h2>
				<div className='underline'></div>
			</div>
			<div className='jobs-center'>
				{/*button container*/}
				<div className='btn-container'>
					{jobs.map((item, index) => {
						return (
							<button
								key={item.id}
								onClick={() => setValue(index)}
								className={`job-btn ${index === value && 'active-btn'}`}
							>
								{item.company}
							</button>
						);
					})}
				</div>
				{/*job info*/}
				<article className='job-info'>
					<h3>{title}</h3>
					<h4>{company}</h4>
					<p className='job-date'>{dates}</p>
					{duties.map((duty, index) => {
						return (
							<div key={index} className='job-desc'>
								<FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
								<p>{duty}</p>
							</div>
						);
					})}
				</article>
			</div>
			<button type='button' className='btn'>
				more info
			</button>
		</section>
	);
}

export default App;
