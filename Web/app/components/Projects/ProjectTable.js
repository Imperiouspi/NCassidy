import React from 'react'
import Files from './files.json';

export default class ProjectTable extends React.Component{
	constructor(props) {
		super(props);
		this.CourseFiles = this.CourseFiles.bind(this);
	}

	CourseFiles(){
		var i=1;
		while(Files(i) != this.props.course){
			i+=1;
		}
		console.log(Files(i))
		return Files(i);
	}

	render(){
		return(
			<div>
				<table>
					<tbody>
						<tr>
							<th>Course</th>
							<th>Members</th>
							<th colSpan={(this.CourseFiles()).length}>Files</th>
						</tr>
						<tr>
							<td>{this.props.course}</td>
							<td>{this.props.members}</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}