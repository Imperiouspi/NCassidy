import React from 'react'

export default class Projects extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div className='page'>
				<div id='project'>
					<div className='item'>
						<h1>Economic Analysis in Engineering Economics</h1>
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
							This project was the second major assignment of engineering economics. This project included the economic analysis of wind versus natural gas power, with two other team members and myself. One of the members and I created a spreadsheet calculating the cash flows and present worth of the two investments, accounting for tax, a possible carbon tax, and depreciation. I then analyzed three different variables to affect the effect on our results of any uncertainty in variables such as the cost of fuel, or efficiency of power generation. Finally, the last student looked at the effect of other non-financial pressures that might determine the outcome of the project, such as environmental impact. Our most interesting result was that wind power at 70% efficiency was found to have the same present worth as natural gas at 90% efficiency. Unfortunately, wind cannot pass about 37% efficiency, as it depends on the weather, and as such natural gas is far more profitable.
						</p>
						<p>
							I particularly enjoyed the analysis opportunity this project presented, and the opportunity to examine data and draw my own conclusions. Data management and analysis has been quite important throughout my education in Civil, and I’m sure it will continue to be. This project let me practice those skills, with the 160 line cash flows, which I manipulated to be able to examine the variability of different values.			
						</p>
					</div>
					<div className='item'>
						<h1>Steel Design Project</h1>
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
							<img src={'app/resources/ElevXSmall.png'} alt='Right elevation of the model' className='projectimage' id='structure'/>Five group members and I collaborated to design a five-story steel structure, seen in figure 1. I modelled the structure using the structural analysis software S-Frame, which, given a loading, can determine the stress on each member in the structure. Each team member then designed a few steel members . Designing the members required the use of the CISC steel handbook. Even with the simplifications made by the tables in the book, this can be a tedious process of iteration, so another team member and I created the excel spreadsheet (attached above), to facilitate this process. The user can input the properties of the section they wish to test, and it will check whether that section can support the limit states experienced by that beam.
						</p>
						<p>
							I enjoyed using the S-Fram software. I picked up on it quickly, and so was able to help my team get to know it better. I ensured our model was well organized, making our model easier to interact with and much more efficient than many other groups' models.
						</p>
					</div>
					<div className='item'>
						<h1>Business Ethics Essays</h1>
						<table>
							<tr>
								<th>Course</th>
								<th>Members</th>
								<th colSpan='2'>Files</th>
							</tr>
							<tr>
								<td>PHL 295</td>
								<td>1</td>
								<td><a href='app/resources/Essay 2.pdf' target='_blank'>Essay 2.pdf</a></td>
								<td><a href='app/resources/Essay 3.pdf' target='_blank'>Essay 3.pdf</a></td>
							</tr>
						</table>
						<p>
							Business ethics was the first philosophy course I've taken, and I thorougly enjoyed it. It was a stark and welcome contrast to my other courses. I enjoyed the process of developing and analyzing an argument, and the essays were some of the most enjoyable writing I've done in a long time.
							The two essays here are essays 2 and 3 of 3 total. We were given some minor guidance on topic, and then told to analyze an argument. Essay 2 examines the practice of price gouging, where a company charges extra for common items in crisis situations. Essay 3 then discusses hiring practices, and whether the best qualified candidate deserves the job in the hiring process.
							As said before, I enjoyed writing these essays. My favourite part was developing the arguments, outlining and planning, carefully considering how to make it strong and convincing. 
						</p>
					</div>
					<div className='item'>
						<h1>This Website</h1>
						<p>
							I created this website by hand using javascript and the <a href='https://reactjs.org/'>React library</a>. It was an opportunity to develop some experience with web development, while simultaneously doing coursework. The source code is available on my Github. I don't have many opportunities to code in Civil, so this was an excellent opportunity to keep these skills fresh. I also got to learn a lot of new software frameworks while setting up my workspace. I got to be familiar with FTP clients, web hosting, SCSS, JSX, Babel, and several other technical terms and names, all standard in web design. I enjoyed having a coding project like this, and I will be further updating it and changing the projects I host here. It’s a useful platform to point others to, to learn quickly about me.
						</p> 
					</div>
				</div>
			</div>
		)
	}
}