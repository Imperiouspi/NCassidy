import React from 'react'

import CodeTitle from './CodeTitle'
import CodeExample from './CodeExample'
import descriptions from './descriptions'

export default class Code extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<div className='page' id='codepage'>
				<CodeTitle/>
				<div id="ExampleProjects">
					<CodeExample name='This Site' description='blah'/>
					<CodeExample name='Counting Digits'/>
					<CodeExample name='Complex-Life'/>
				</div>
				<a href="https://github.com/Imperiouspi/NCassidy">Source</a>
			</div>
		)
	}
}