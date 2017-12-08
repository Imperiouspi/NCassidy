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
					I went into Civil Engineering becuase it is a very broad discipline. Within it are included such diverse topics as wastewater treatment and structural analysis, which have nearly nothing to do with each other. However, these broad subjects come together in Civil Engineering under the guise of analyzing infrastructure and buildings, as they simultaneously: fail to collapse (structural), process human waste (water), produce profits (economics), and even contain humans (social sciences), all inside a restricted space. This portfolio was developed to show off some of what I can do. The majority of my submissions are group projects, where I was often a team leader, organizing meetings and driving discussion. The first three submissions also utilized my skill with software: the economics assignment uses Microsoft Excel for the data analysis, the steel structure was designed with S-Frame, and this website is coded in JavaScript and XML with the React library.
				</p>
			</div>
		);
	}
}