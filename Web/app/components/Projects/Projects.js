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
						<h1>Economic Analysis in CME 368</h1>
						<table>
							<tr>
								<th>Course</th>
								<th>Members</th>
								<th colSpan='2'>Files</th>
							</tr>
							<tr>
								<td>CME 368</td>
								<td>3</td>
								<td><a href='app/resources/Economics Assignment 2.xlsx'>Assignment.xlsx</a></td>
								<td><a href='app/resources/CME 368 - Assignment 2 - Report.pdf' target='_blank'>Submission.pdf</a></td>
							</tr>
						</table>
						<p>
							This project included the economic analysis of wind versus natural gas power, with two other students and myself.
							One of the students and I created a spreadsheet calculating the cash flows and present worth of the two investments. 
							I then analyzed a three different variables to determine the effect of any uncertainty on our results. 
							Finally, the last student looked at the effect of other non-financial pressures that might determine the outcome of the project, such as environmental impact. 
						</p>
						<p>
							I particularly enjoyed the analysis opportunity this project presented, and the opportunity to examine data and draw my own conclusions. 
							
						</p>
					</div>
					<div>
						<h1>CIV 312 Project</h1>
						<table>
							<tr>
								<th>Course</th>
								<th>Members</th>
								<th colSpan='2'>Files</th>
							</tr>
							<tr>
								<td>CME 312</td>
								<td>5</td>
								<td><a href='app/resources/CIV312 Final Submission.pdf' target='_blank'>CIV312.pdf</a></td>
								<td><a href='app/resources/Project Loads Corrected.xlsx'>Loads.xlsx</a></td>
							</tr>
						</table>
						<p>
							<img src={'app/resources/ElevXSmall.png'} alt='Right elevation of the model' className='projectimage' id='structure'/>Five group members and I collaborated to design a five storey steel structure, seen in figure 1. 
							I modelled the structure using <a href='https://s-frame.com/' target='_blank'>S-frame</a>, and everyone designed three seperate members. 
							Designing the members required the use of the CISC steel handbook. 
							Even with the simplifications made by the tables in the book, this can be a tedious process of iteration, so I and one other member, created the excel spreadsheet (attached above), to facilitate this process. 
							The user can input the properties of the section they wish to test, and it will check whether that section can support the limit states experienced by that beam.
						</p>
						<p>

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