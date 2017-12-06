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
						<tr>
							<th>Course</th>
							<th>Members</th>
							<th>File</th>
						</tr>
						<tr>
							<td>CME 368</td>
							<td>5</td>
							<td><a href='app/resources/Assignment2.xlsx'>Assignment2.xlsx</a></td>
						</tr>
						<p>
							This project included the economic analysis of wind versus natural gas power, with two other students and myself.
							One of the students and I created a spreadsheet calculating the cash flows and present worth of the two investments. 
							I then analyzed a three different variables to determine the effect of any uncertainty on our results. 
							Finally, the last student looked at the effect of other non-financial pressures that might determine the outcome of the project, such as environmental impact. 
						</p>
						<p>
							The primary analysis, being able to examine the data and draw conclusions for myself, rather than citing sources, made this one of my favourite projects of third year. 
						</p>
					</div>
					<div>
						<h1>CIV 312 Project</h1>
						<p>
							This project included the member and connection design of a five story building.

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