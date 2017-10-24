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
			</div>
		);
	}
}