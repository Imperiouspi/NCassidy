import React from 'react';

export default class WelcomeText extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<p className="welcometext">
				This is some text describing me, Noah Cassidy. Currently I have yet to determine 
				the goal of this portfolio, but for now I leave you with this speech by Gandalf
				the White during the battle of the Pellenor Fields, in Gondor.<br/><br/>
				PIPPIN: I didn't think it would end this way.<br/>
				GANDALF: End? No, the journey doesn't end here. Death is just another path, one that we all must take. The grey rain-curtain of this world rolls back, and all turns to silver glass, and then you see it.<br/>
				PIPPIN: What? Gandalf? See what?<br/>
				GANDALF: White shores, and beyond, a far green country under a swift sunrise.<br/>
				PIPPIN: Well, that isn't so bad.<br/>
				GANDALF: No. No, it isn't.<br/>
			</p>
		);
	}
}