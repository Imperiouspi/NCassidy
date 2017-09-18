import React from 'react'
import  {Switch, Route} from 'react-router-dom'

import Menu from './Menu/Menu'
import Content from './Content'

//TODO: write mobile formatting
//src: https://coderwall.com/p/i817wa/one-line-function-to-detect-mobile-devices-with-javascript
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

const App = () =>(
	<div>
		<Menu/>
		<Content/>
	</div>
)

export default App