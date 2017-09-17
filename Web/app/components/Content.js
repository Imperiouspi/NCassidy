import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Welcome from './Welcome'
import About from './About'
import Code from './Code'
import Music from './Music'
import School from './School'

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