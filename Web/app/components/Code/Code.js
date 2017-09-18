import React from 'react'

import CodeTitle from './CodeTitle'

export default class Code extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<div className='page'>
				<CodeTitle/>
				<a href="https://github.com/Imperiouspi/NCassidy">Source</a>
			</div>
		)
	}
}