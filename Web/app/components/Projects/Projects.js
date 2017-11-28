import React from 'react'

export default class Projects extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div className='page'>
				<div id='project'>
					<div>
						<h1>CME 368 Assignment 2</h1>
						<p>
							This project included the economic analysis of wind versus natural gas power, with two other students and myself.
							One of the students and I created a spreadsheet calculating the cash flows and present worth of the two investments. 
							I then analyzed a three different variables to determine the effect of any uncertainty on our results. 
							Finally, the last student looked at the effect of other non-financial pressures that might determine the outcome of the project, such as environmental impact. 
						</p>
						<p>
							The primary analysis, being able to examine the data and draw conclusions for myself, rather than citing sources, made this one of my favourite projects of third year. 
						</p>
						<p>
							Links to our <a href='app/resources/Assignment2.xlsx'>Spreadsheet</a> and our <a href='app/resources/CME Final Report.pdf' target='_blank'>Final Report</a>.
						</p>
					</div>
					<div>
						<h1>CIV 312 Project</h1>
						<p>
							Member and connection design of a five story building
						</p>
					</div>
					<div>0
						<h1>This Website</h1>
						<p>
							I made it
						</p>
					</div>
				</div>
			</div>
		)
	}
}