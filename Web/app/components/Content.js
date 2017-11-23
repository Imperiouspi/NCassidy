import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Welcome from './Home/Welcome'
import About from './About/About'
import Code from './Code/Code'
import Music from './Music/Music'
import Projects from './Projects/Projects'

const Content = () => (
	<div id='top'>
		<div id='buffer'/>
		<Switch>
			<Route exact path='/' component={Welcome}/>
			<Route path='/About' component={About}/>
			<Route path='/Code' component={Code}/>
			<Route path='/Music' component={Music}/>
			<Route path='/Projects' component={Projects}/>
		</Switch>
	</div>
)

export default Content