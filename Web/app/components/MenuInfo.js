import React from 'react';

export default class WelcomePage extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div id="MenuInfo">
				<b id="name">Noah Cassidy</b><br/>
				noah.cassidy@mail.utoronto.ca<br/>
				University of Toronto<br/>
				3<sup>rd</sup> Year Civil Engineering
			</div>
		);
	}
}