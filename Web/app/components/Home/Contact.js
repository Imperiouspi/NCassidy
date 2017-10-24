import React from 'react';
import {Link} from 'react-router-dom'

export default class Contact extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div className="contact">
				Me on the internet:&nbsp;
				<a href='mailto:noah.cassidy@mail.utoronto.ca'>email,</a>&nbsp;
				<a href='https://github.com/imperiouspi'>GitHub,</a>&nbsp;
				<a href='https://www.linkedin.com/in/noah-cassidy-497826146/'>LinkedIn</a>
			</div>
		);
	}
}