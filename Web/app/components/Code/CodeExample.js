import React from 'react'

export default class CodeExample extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<div className="CodeExample">
				<div className="exampletitle">
					{this.props.name}
				</div>
				<div className="exampleimage">
					{this.props.image}
				</div>
				<div className="exampledescription">
					{this.props.description}
				</div>
			</div>
		)
	}
}