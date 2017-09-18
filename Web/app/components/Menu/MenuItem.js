import React from 'react'
import {Link} from 'react-router-dom'

export default class MenuItem extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div>
				<div className="menuItem">
					<div className="circle"/>
					<Link to={"/" + this.props.label} className='menuLink'>{this.props.label}</Link>
				</div>
			</div>
		)
	}
}