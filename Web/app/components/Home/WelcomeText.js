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
					Originally created for an assignment, this website contains a portfolio of some of my projects, from both in and out of school. It was created from scratch with JSX and the React library. The code is available on Github.
				</p>
			</div>
		);
	}
}