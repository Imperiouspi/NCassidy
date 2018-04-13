import React from 'react';
import {Link} from 'react-router-dom'

export default class WelcomeText extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div className="welcometext">
				<p>
					I am a third-year Civil Engineering student at the University of Toronto, also completing a Business Minor.
					I have a diverse range of experience, from  <Link to={"/Projects"}>programming</Link> to <Link to={"/About"}>summer camp</Link> to <Link to="/Music">music</Link>. I am looking to combine my education in Civil Engineering with my aptitude for data analysis, programming, and software, with my skills in facilitation and collaboration. 
				</p>
				<p>
					I was originally drawn to civil because it’s a very broad discipline. I wasn’t sure what I wanted to do, I had a lot of experience with computers and software, as well as some leadership experience from summer camp, and assumed I would be able to find somewhere to utilize my skills. Since then, I’ve had so many different classes in all the topics civil engineering has to offer, and some outside of that. I’ve enjoyed my business minor courses a lot, they’ve changed the way I view the world. Since first year, I’ve gravitated towards the building science or construction management side of the field. I enjoy how they combine technical expertise with human consideration: it doesn’t matter how well you’ve designed your vapour barrier, if people leave the door open it’s useless.
				</p>
				<p>
					This website contains my portfolio, on the “projects” page. It is a sample of a few assignments I've completed over this third year of school. I have an economic analysis of wind versus natural gas power, a five-story steel building design, two essays on ethics, and this website. They were chosen as the projects that highlight my diverse experience, as well as being the projects I’m most proud of from this year. My data analysis is shown in the economic analysis and steel design. My technical literacy is demonstrated through those assignments and this website, coded on and off throughout this semester. And finally, my philosophy essays are to demonstrate my communication ability, and are also interesting. I’m proud of Essay 3 especially: I have created and argued for my own conclusion of why the best qualified candidate “deserves” the job.
				</p>
			</div>
		);
	}
}