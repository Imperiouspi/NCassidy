import React from 'react'

export default class About extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div className='page'>
				<div id='about'>
					<div>
						<h1>About Me</h1>
						<p>
							<img src={'app/resources/profilesmall.jpg'} alt='profile' id='aboutprofile'/>
							Currently, the most influential activities in my life have been camp and school.
							Camp gave me an appreciation for community, a space to exercise my creativity, plenty of opportunities to grow as a facilitator and communicator,
							and a clear purpose in creating engaging programs for children.
							My education in engineering has helped me learn about my leadership style, and helped me explore the technical tools that can assist me 
							in creating innovative solutions to any problem. 
						</p>
					</div>
					<div>
						<h1>Education</h1>
						<p>
							In high school, I attended the <a href='http://www.topsprogram.ca/'>TOPS</a> program at Marc Garneau C.I. in Toronto, an enriched Science and Math program.
							My 60 classmates were all invested and high achieving students, helping to drive me forward. TOPS also introduced me to programming,
							the skills from which have been invaluable throughout my education.
						</p>
						<p>
							I am in the middle of my third year of Civil Engineering. I am completing a business minor to enrich my studies.
							
						</p>
					</div>
					<div>
						<h1>Leadership</h1>
						<p>
							I worked for the <a href='http://ilovecamp.org/'> Cairn Family of Camps </a>for three summers. I was a counsellor for two years, and a resource staff for one. 
							As a counsellor I cared for and planned activities for a cabin of up to ten children with another counsellor.
							As a resource staff, I planned and ran sessions for all the cabins at camp, and helped the counsellors engage the children.
							I ran activities with groups of 10 to almost 100 people. <br/>
							[write about camp introducing me to being a leader]
						</p>	
					</div>
					<div>
						<h1>Extracurriculars</h1>
						<p>
							CECA<br/>
							Siesmic<br/>
							Archery<br/>
						</p>
					</div>
					<div>
						<h1>Resume</h1>
						<a href='app/resources/resume.docx' target='_blank'>Download</a>
					</div>
				</div>
			</div>
		)
	}
}