import React from 'react';
import {Link} from 'react-router-dom'

export default class QuickFacts extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div className="quickfacts">
				<table>
					<tbody>
						<tr>
							<td> Name: Noah Cassidy </td>
						</tr>
						<tr>
							<td> Current Occupation: Summer Student with Kaley Walker at the University of Toronto in Atmospheric Physics </td>
						</tr>
						<tr>
							<td> Education: University of Toronto Civil Engineering with Business Minor (entering fourth year) </td>
						</tr>
						<tr>
							<td> Contact Information: <a href='mailto:noah.cassidy@mail.utoronto.ca'>noah.cassidy@mail.utoronto.ca</a>, <a href='https://github.com/imperiouspi' target="_blank">GitHub</a>, <a href='https://www.linkedin.com/in/noah-cassidy-497826146/' target="_blank">LinkedIn</a>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}