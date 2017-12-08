import React from 'react';
import {Link} from 'react-router-dom'

export default class Contact extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div className="contact">
			<p>
				Me on the internet: <br/>
				&nbsp;&nbsp;&nbsp;&nbsp;- <a href='mailto:noah.cassidy@mail.utoronto.ca'>noah.cassidy@mail.utoronto.ca</a><br/>
				&nbsp;&nbsp;&nbsp;&nbsp;- <a href='https://github.com/imperiouspi'>GitHub</a><br/>
				&nbsp;&nbsp;&nbsp;&nbsp;- <a href='https://www.linkedin.com/in/noah-cassidy-497826146/'>LinkedIn</a><br/>
			</p>
			</div>
		);
	}
}