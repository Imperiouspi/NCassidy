import React from 'react'
import {Link} from 'react-router-dom'

export default class MenuItem extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div className="menuItem">
				<Link to={"/" + this.props.label}>{this.props.label}</Link>
			</div>
		)
	}
}