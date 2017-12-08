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
							This project included the economic analysis of wind versus natural gas power, with two other students and myself. One of the students and I created a spreadsheet calculating the cash flows and present worth of the two investments, accounting for tax, a possible carbon tax, and depreciation. I then analyzed three different variables to determine the effect on our results of any uncertainty in variables such as the cost of fuel, or efficiency of power generation. Finally, the last student looked at the effect of other non-financial pressures that might determine the outcome of the project, such as environmental impact. Our most interesting result was that, by the data given, wind power at 70% efficiency has the same present worth as natural gas at 90% efficiency. Unfortunately, wind is stuck at about 37% efficiency, as it depends on the weather, and as such natural gas is far more profitable.
						</p>
						<p>
							I particularly enjoyed the analysis opportunity this project presented, and the opportunity to examine data and draw my own conclusions. Data management and analysis has been quite important throughout my education in Civil, and I’m sure it will continue to be. It is important to be able to manage large amounts of data, format it, and present it in a useful form. This project let me practice those skills, with the 160 line cash flows, which I manipulated to be able to examine the variability of different values.							
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
							<img src={'app/resources/ElevXSmall.png'} alt='Right elevation of the model' className='projectimage' id='structure'/>Five group members and I collaborated to design a five-story steel structure, seen in figure 1. I modelled the structure using s-frame and everyone designed three separate members. Designing the members required the use of the CISC steel handbook. Even with the simplifications made by the tables in the book, this can be a tedious process of iteration, so I and one other member, created the excel spreadsheet (attached above), to facilitate this process. The user can input the properties of the section they wish to test, and it will check whether that section can support the limit states experienced by that beam.
						</p>
						<p>
							This project demonstrates my computer knowledge, as I was one of the only people in my group able to use the software for this project. This was partially because I have a lot of experience learning new pieces of software, which I explore for fun in my spare time. I was able to learn S-Frame faster than many of my classmates, and was able to use it well, organizing the model in logical ways, while many other groups were stuck with hard to use models.
						</p>
					</div>
					<div>
						<h1>This Website</h1>
						<p>
							The website was coded in JavaScript using JSX and the <a href='https://reactjs.org/'>React library</a>. I have been working on it throughout third year, and it is still being updated. Significant features include: the overlay on buttons, the organized structure of code and files, and 
						</p>
						<p>
							This website demonstrates my coding proficiency, and all the code is available on <a href='https://github.com/imperiouspi' target='blank'>GitHub</a>. I have designed the layout from my experience with other websites, and have chosen the images and colour scheme to be pleasant and be representative of me.
						</p>
					</div>
				</div>
			</div>
		)
	}
}