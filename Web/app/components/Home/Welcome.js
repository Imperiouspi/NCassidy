import React from 'react';

import TopBanner from './TopBanner'
import WelcomeText from './WelcomeText.js'
import Contact from './Contact.js'

export default class WelcomePage extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div className='page'>
				<div id="welcomepg">
					<TopBanner/>
					<div className="blurb">
						<WelcomeText/>
					</div>
					<div className="divider">
						
					</div>
					<Contact/>
				</div>
			</div>
		);
	}
}