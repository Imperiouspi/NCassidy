import React from 'react';

import TopBanner from './TopBanner'
import WelcomeText from './WelcomeText.js'
import QuickFacts from './QuickFacts.js'

export default class WelcomePage extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div className='page'>
				<div id="welcomepg">
					<TopBanner/>
					<div className="divider">
					</div>
					Summary
					<QuickFacts/>
					<div className="divider">
					</div>
					<div className="blurb">
						<WelcomeText/>
					</div>
				</div>
			</div>
		);
	}
}