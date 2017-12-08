import React from 'react'

export default class Music extends React.Component{
	constructor(props) {
		super(props);
		
	}

	render(){
		return(
			<div className='page'>
				<div id='music'>
					<div>
						<h1>Piano</h1>
						<p>
							I've been playing piano for {((new Date).getFullYear())-1997-6} years. 
							I completed up to RCM Grade 10, and now mostly play for fun, either solo or accompanying friends and siblings. 
							I was trained with and enjoy the classical repertoire, but I have also always loved playing film music, 
							I even used to use the beginning hand positions of the <i>Imperial March</i> (from Star Wars) to tell my left and rights. 
						</p>
					</div>
					<div>
						<h1>Arrangements</h1>
						<p>
							Often, I would run into a problem playing film music: the one song I wanted to play most was never arranged! 
							So, I started to doing it myself. I use <a href="https://www.finalemusic.com/" target='_blank'>Finale</a> and transcribe by ear from the orchestral arrangements to piano. 
							I've arranged songs from Narnia, Harry Potter, Hamilton, and more. Snippets can be found below [investigation into legality of publically hosting personal arrangements ongoing].
						</p>
					</div>
				</div>
			</div>
		)
	}
}