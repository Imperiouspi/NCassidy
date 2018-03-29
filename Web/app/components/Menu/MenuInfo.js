import React from 'react';
import {Link} from 'react-router-dom'

export default class WelcomePage extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<Link to='/' id="MenuInfo">
				<b id="name">Noah Cassidy</b>
			</Link>
		);
	}
}