import React from 'react'

export default class Music extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div className='page'>
				<div id='music'>
					<div>
						<h1>Piano</h1>
						<p>
						</p>
					</div>
					<div>
						<h1>Arrangements</h1>
						<a href='app/resources/We Know.pdf'>We Know</a>
					</div>
				</div>
			</div>
		)
	}
}