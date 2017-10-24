import React from 'react'

export default class CodeTitle extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<div id='codetitlebox'>
				<div id="CodeTitle">Computers and Programming</div>
				<div id="Codesplanation">
					I took a mandatory computer science class in Grade 10, and I've been exploring software ever since. Here's some stuff I've done!
				</div>
			</div>
		)
	}
}