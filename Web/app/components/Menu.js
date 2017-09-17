import React from 'react'

import Logo from './Logo'
import MenuInfo from './MenuInfo'
import MenuItem from './MenuItem'

export default class Menu extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div className="topMenu">
				<Logo/>
				<MenuInfo/>
				<div id="menu">
					<MenuItem label='About'/>
					<MenuItem label='Code'/>
					<MenuItem label='Music'/>
					<MenuItem label='School'/>
				</div>
			</div>
			);
	}
}
