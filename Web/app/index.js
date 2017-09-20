import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route} from 'react-router-dom'
import App from './components/App'

require('./sass/ncassidysass.scss');

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

//find 'root' and render element in 'root'
ReactDOM.render(
	<Router>
		<Route path='/' component={App}/>
	</Router>,
	document.getElementById('root')
)