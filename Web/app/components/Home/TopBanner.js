import React from 'react';

export default class TopBanner extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div className="topbanner">
				<img src={'app/resources/newbanner.png'} alt='placeholder' className='tbimage'/>
			</div>
		);
	}
}