import React from 'react'

export default class CodeTitle extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<div id='codetitlebox'>
				<div id="CodeTitle">Coding Projects</div>
				<div id="Codesplanation">
					I have been coding since Grade 10, etc. etc. I do computer things.
				</div>
			</div>
		)
	}
}