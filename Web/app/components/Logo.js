import React from 'react'
import {Link} from 'react-router-dom'

export default class Logo extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div className="logo">
				<img src={'app/resources/profile.jpg'} alt='profile' className='profileimg'/>
				<div className="home">
					<Link to='/'>Home</Link>
				</div>
			</div>
			);
	}
}