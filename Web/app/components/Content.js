import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Welcome from './Home/Welcome'
import About from './About/About'
import Music from './Music/Music'
import Projects from './Projects/Projects'

const Content = () => (
	<div id='top'>
		<div id='buffer'/>
		<Switch>
			<Route exact path='/' component={Welcome}/>
			<Route path='/About' component={About}/>
			<Route path='/Projects' component={Projects}/>
			<Route path='/Music' component={Music}/>
		</Switch>
	</div>
)

export default Content