import React from 'react';
import {Link} from 'react-router-dom'

export default class Contact extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div className="contact">
				Contact me:&nbsp;<a href='mailto:noah.cassidy@mail.utoronto.ca' > email</a>
			</div>
		);
	}
}