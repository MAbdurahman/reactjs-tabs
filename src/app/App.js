import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { TailSpin } from 'react-loading-icons';

const url = 'https://course-api.com/react-tabs-project';

function App() {
	//**************** variables ****************//
	const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

	//**************** functions ****************//

	if (loading) {
		return (
      <section className='section loading'>
        <TailSpin
          height='5em'
          width='5em'
          fill='#102A42'
          stroke='#102A42'
          strokeWidth={2}
        />
      </section>

      
		);
	}
	return (
		<div>
			<h1>App</h1>
		</div>
	);
}

export default App;
