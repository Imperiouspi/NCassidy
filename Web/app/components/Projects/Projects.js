import React from 'react'
import ProjectTable from './ProjectTable'

export default class Projects extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div className='page'>
				<div id='project'>
					<div>
						<h1>Economic Analysis Assignment</h1>
						<table>
							<tbody>
							<tr>
								<th>Course</th>
								<th>Members</th>
								<th>Files</th>
							</tr>
							<tr>
								<td>CME 368</td>
								<td>3</td>
								<td><a href='app/resources/Assignment2.xlsx'>Assignment2.xlsx</a></td>
							</tr>
							</tbody>
						</table>
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
						<h1>Design of a Steel Structure</h1>
						<ProjectTable course='CIV312' members='5'/>
						<p>
							This project included the member and connection design of a five story building.

						</p>
					</div>
					<div>
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