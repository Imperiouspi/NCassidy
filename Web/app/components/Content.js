import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Welcome from './Home/Welcome'
import About from './About/About'
import Code from './Code/Code'
import Music from './Music/Music'
import School from './School/School'

const Content = () => (
	<div>
		<div id='buffer'/>
		<Switch>
			<Route exact path='/' component={Welcome}/>
			<Route path='/About' component={About}/>
			<Route path='/Code' component={Code}/>
			<Route path='/Music' component={Music}/>
			<Route path='/School' component={School}/>
		</Switch>
	</div>
)

export default Content