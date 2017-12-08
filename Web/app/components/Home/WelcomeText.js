import React from 'react';
import {Link} from 'react-router-dom'

export default class WelcomeText extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div className="welcometext">
				I am a third-year Civil Engineering student at the University of Toronto, also completing a Business Minor.
				I have a diverse range of experience, from  <Link to={"/Code"}>programming</Link> to <Link to={"/About"}>summer camp</Link> to <Link to="/Music">music</Link>. I am looking to combine my education in Civil Engineering with my computer competence and my skills in facilitation and collaboration. 
				Civil Engineering is a very broad discipline. Within it are included such diverse topics as wastewater treatment and structural analysis, which have nearly nothing to do with each other. However, these broad subjects come together in Civil Engineering under the guise of analysing infrastructure and buildings, as they fails to collapse (structural), process human waste (water), produce profits (economics), and even contain humans (social sciences), all simultaneously in a restricted space. This interdisciplinary range is what drew me to civil engineering origininally: a place where I can use my computer science experience, interpersonal skills, and 
			</div>
		);
	}
}