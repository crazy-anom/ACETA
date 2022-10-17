import React from 'react'
import Navigation from './components/Navigation' 
const Learn = () =>{
	return(
		<>
		<Navigation />
		<div className = "min-h-screen">
			<h5 className = "text-center pt-10 font-bold text-2xl">Communications</h5>
			<div className = "md:flex flex-col items-center text-center px-10">
				<div className = "m-auto w-1/2 my-20 shadow-lg rounded-lg p-2">
					<h5 className = "font-bold mb-2">Whatsapp Group</h5>
					<p className = "text-gray-500 text-sm mb-4">For Frontend related doubt you can contact us in this group.</p>
					<div className = "bg-red-400 py-2 font-bold font-mono text-white rounded-md">
					<a className = "bg-red-400 py-2 font-bold font-mono text-white rounded-md" href = "https://chat.whatsapp.com/KZJzYgwj2BVBo4htvKNDEJ"><i className = "whatsapp icon"></i>Whatsapp</a>
					</div>
				</div>
				<div className = "mx-auto w-1/2 my-20 shadow-lg rounded-lg p-2">
					<h5 className = "font-bold mb-2">Instagram</h5>
					<p className = "text-gray-500 text-sm mb-4">For Frontend related doubt you can contact through instagram.</p>
					<div className = "bg-red-400 py-2 font-bold font-mono text-white rounded-md">
					<a className = "bg-red-400 py-2 font-bold font-mono text-white rounded-md" href = "https://www.instagram.com/charlie_charlo.luv/"><i className = "instagram icon"></i>Instagram</a>
					</div>
				</div>
				<div className = "mx-auto w-1/2 my-20 shadow-lg rounded-lg p-2">
					<h5 className = "font-bold mb-2">Gmail</h5>
					<p className = "text-gray-500 text-sm mb-4">For Frontend related doubt you can contact through Gmail.</p>
					<div className = "bg-red-400 py-2 font-bold font-mono text-white rounded-md">
					<a className = "bg-red-400 py-2 font-bold font-mono text-white rounded-md" href = "https://www.instagram.com/charlie_charlo.luv/"><i className = "mail icon"></i>Gmail</a>
					</div>
				</div>
			</div>
		</div>

		<footer className = " absolute b-0 min-w-full bg-black min-h-fit text-center text-white text-xs font-light py-4">
              <p>This web site is developed by gowdaman from 2nd year cse dept.</p>
          </footer>
		</>
		);
}
export default Learn;