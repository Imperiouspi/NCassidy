import React from 'react';

import TopBanner from './TopBanner'
import WelcomeText from './WelcomeText.js'

export default class WelcomePage extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div className="welcomepg">
				<TopBanner/>
				<div className="blurb">
					<WelcomeText/>
				</div>
			</div>
		);
	}
}