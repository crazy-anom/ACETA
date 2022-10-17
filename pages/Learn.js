import React from 'react'
import Navigation from './components/Navigation'
import Frontend from './Frontend'
import Backend from './Backend'
const Learn = () =>{
	const [isFrontend , setFrontend] = React.useState('hello');
	return(
		<>
		<Navigation />
		<div className = "text-center my-10 px-5 items-center">
			<h3 className = "font-bold text-2xl mb-10">ACETA CLUB <span className = "text-red-400 underline">LEARNING</span> ZONE</h3>
			<h4 id = "frontend" className  =  "font-semibold mb-10">Frontend development tutorials</h4>
			<Frontend />
			<h4 id = "backend" className  =  "font-semibold mb-10">Programming language tutorials</h4>
			<Backend />

		</div>



		<footer className = "min-w-full bg-black min-h-fit text-center text-white text-xs font-light py-4">
              <p>This web site is developed by gowdaman from 2nd year cse dept.</p>
          </footer>
		</>
		);
}
export default Learn;
