import React from 'react'
import Navigation from './components/Navigation'
import Frontend from './Frontend'
import Backend from './Backend'
import Image from "next/image"
import Eventimg from "./components/event1.jpg"
const Event = () =>{
	const [isFrontend , setFrontend] = React.useState('hello');
	return(
		<div> 
			<Navigation />
			<div className = "min-h-full">
				<h5 className = "text-center font-bold text-red-400 text-2xl mt-10">Event List</h5>
				<p className = "text-center font-bold text-gray-400 text-1xl mt-5">Aceta presents TECHYZZ</p>
				<div className = "my-4 min-w-screen flex items-center justify-center">
					<div className = "min-h-fit w-1/2 shadow-lg flex flex-col gap-2 justify-center p-10">
						<Image className ="items-center mx-auto" src = {Eventimg} />
						<p className = "">A event is on 18th oct 2022 in our auditorium at 3:15pm.let's get start to learn some usefull technical themes.</p>
					</div>
				</div>
			</div>
		</div>
		);
}
export default Event;
