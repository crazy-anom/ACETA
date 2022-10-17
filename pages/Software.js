import React from 'react'
import Navigation from './components/Navigation'
const Software = () =>{
	const [isFrontend , setFrontend] = React.useState('hello');
	return(
		<>
		<Navigation />
		<div className = "m-10">
			<div className = "text-center">
			<h1 className = "font-bold text-2xl mb-10 ">SOFTWARE CENTER</h1>
			<p className = "text-gray-500 mb-10">All required Software and ide are given below you can refer tha offcial site and download the software that you needed</p>
			</div>
			<h3 className = "font-bold mb-10 text-center">Software for Frontend development</h3>
				<div className = "md:flex items-center">
					<div className  = " mb-10 flex flex-col py-4 mx-auto text-center items-center">
						<h4 className = "mb-2 font-bold text-red-400 mb-10">Vs code</h4>
						<img className = "mb-4" src= "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//CABEIAC4ALgMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAGBwUIAAEEAgP/2gAIAQEAAAAAtHraxDWXDsBUKc0wwVHiwYcI/Pgh3NGhzjMgKvc11We1garHP//EABgBAQADAQAAAAAAAAAAAAAAAAUCAwQG/9oACgICEAMQAAAA05UTGBYypvSK4fv2Q3AP/8QAMhAAAgECBAMECAcAAAAAAAAAAQIDBAUABhESEzFRIUFCUgciI2FicYTBECAycoGhov/aAAgBAQABPwD8c3Z6Wl4tBapAZ+1Zqkco+qp8XU4y9erlRwb4al+2RtQx3KfmDi3ZzpJgVrYzC4H6l1ZD9xir9JNLFc+HBScWiU6NLykb4kHTFBcKO40yVNJOssTeIdx7wehGM5Z9WTiW60Tepynql8fVI/d1bCb5HjijjZ5HYKkaDczE9wAwLVXWlI6etVVmZBKUB3bA/hJ64DYzjkkbJ7nbEVQqmSpg5DQdpkT7jEdZVRQ1EMVRLHHOm2VUYgOvQ4tdmuV1r46KijV5GBO5jtRFHNmxljJ1tsEfEX29Yy6SVLD/ACg8K4zudL59PHgNjOmep7470lKWht6Ny5NMR4n+y4sGU8xXahnrKamHARNYi52tMekWEmnppw6M8U0T9hGqujL/AGCMZV9IcFVw6O7usU3JKnkj/v8AKcZ7Ol++mjwGxXZCy1XXgXOekJcndJCDpDI/mdMAAAAAAAAAAaAAYzjkmG9K1XSBYq8D5LMB3P7+jYqIZ6aeWCeJo5Y2KvGw0KkdxxRVU81NHxZXfZ7NNx12ovJR7hjeOv5M25Oo8wwb02w1yLpFN3MPJJ1GMo5QrLpFKGqooYopSHIBd/4BAxacs2e1KeBThpCNGmk9dzj/xAAmEQACAQMCBAcAAAAAAAAAAAABAgMABBEFMRIhQeEkMkJRYXPB/9oACAECAQE/AJrS4gVGkjKhtjVjp20sw+Qp/aewtbqJWKjJHJ13qzd4rVReOuMgDi6ewNatbXZjzCcx+pRv3Facvgbb6xTyyOFDuSFGBk7VperGArDOSY9geq9qu9VtbMcGCz48o5Cv/8QAJREAAgEEAQEJAAAAAAAAAAAAAQIDAAQRMQXhEiEiJDJRYXOx/9oACAEDAQE/AILy2nd1ilDFdir/AJPcUB+Cw/BSchd2krKGOAe9G1V6iTXbNYo2QCW7Oj7kVw91ZrLiYYlz4WOuhrkm8/c/YaSKOMsURVLHJwN1y3DrOGmgAEu2XQbrVnxF3ekvkJHn1k5Nf//Z"/>
						<p className = "text-gray-500 w-1/2 mb-4">It is an open source ide for all language with more number of extensions</p>
						<a className = "bg-red-400 p-3 mb-2 w-1/2 py-1 rounded-md font-bold text-white" href = "https://code.visualstudio.com/">offcial site</a>
						<a className = "text-red-400 font-bold border-2 border-red-400 w-1/2 py-1 rounded-md" href = "https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user">DOWNLOAD</a>
					</div>
					<div className  = " mb-10 flex flex-col  py-4 mx-auto text-center items-center">
						<h4 className = "mb-2 font-bold text-red-400">Atom</h4>
						<img className = "my-4 w-1/6" src= "https://th.bing.com/th?q=Atom+Text+Editor+Icon&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"/>
						<p className = "text-gray-500 w-1/2">It is an open source ide for all language with more number of extensions</p>
						<a className = "bg-red-400 p-3 mb-2 w-1/2 py-1 rounded-md font-bold text-white" href = "https://atom.io/">offcial site</a>
						<a className = "text-red-400 font-bold border-2 border-red-400 w-1/2 py-1 rounded-md" href = "https://atom.io/download/windows_x64">DOWNLOAD</a>
					</div>
					<div className  = " mb-10 flex flex-col  py-4 mx-auto text-center items-center">
						<h4 className = "mb-2 font-bold text-red-400">Sublime Text 3</h4>
						<img className = "my-4 w-1/6" src= "https://th.bing.com/th?q=Sublime+Text+Icon&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"/>
						<p className = "text-gray-500 w-1/2">It is an open source ide for all language with more number of extensions</p>
						<a className = "bg-red-400 p-3 mb-2 w-1/2 py-1 rounded-md font-bold text-white" href = "https://www.sublimetext.com/">offcial site</a>
						<a className = "text-red-400 font-bold border-2 border-red-400 w-1/2 py-1 rounded-md" href = "https://www.sublimetext.com/download_thanks?target=win-x64">DOWNLOAD</a>
					</div>
				</div>

				<h3 className = "font-bold mb-10 text-center">Software for frogramming Language</h3>
				<div className = "md:flex items-center">
					<div className  = " mb-10 flex flex-col  py-4 mx-auto text-center items-center">
						<h4 className = "mb-2 font-bold text-red-400">MinGW C & Cpp compiler</h4>
						<img className = "my-4 w-1/4"  src= "https://th.bing.com/th/id/OIP.k8fd1cyl6mj2xK6ssQF63QHaHa?w=154&h=180&c=7&r=0&o=5&pid=1.7"/>
						<p className = "text-gray-500 w-1/2 mb-3">It is an open source compiler for running both C & Cpp.</p>
						<a className = "text-red-400 font-bold border-2 border-red-400 w-1/2 py-1 rounded-md" href = "https://sourceforge.net/projects/mingw-w64/files/latest/download">DOWNLOAD</a>
					</div>
					<div className  = " mb-10 flex flex-col py-4 mx-auto text-center items-center">
						<h4 className = "mb-2 font-bold text-red-400 mb-6">Eclipse Java IDE</h4>
						<img className = "my-4 mb-8 w-1/6" src= "https://www.eclipse.org/downloads/assets/public/images/logo-eclipse.png"/>
						<p className = "text-gray-500 w-1/2 mb-4">It is an open source ide for java, it is user friendly and easy to use</p>
						<a className = "text-red-400 font-bold border-2 border-red-400 w-1/2 py-1 rounded-md" href = "https://www.eclipse.org/downloads/download.php?file=/oomph/epp/2022-09/R/eclipse-inst-jre-win64.exe">DOWNLOAD</a>
					</div>
					<div className  = " mb-10 flex flex-col py-4 mx-auto text-center items-center">
						<h4 className = " font-bold text-red-400">Python</h4>
						<img className = "w-1/2" src= "https://th.bing.com/th/id/OIP.jBcZ1zGElDbJtzTX1l6VWAHaFP?w=294&h=208&c=7&r=0&o=5&pid=1.7"/>
						<p className = "text-gray-500 w-1/2  mb-2">It is an open source official ide used to install and code python.</p>
						<a className = "text-red-400 font-bold border-2 border-red-400 w-1/2 py-1 rounded-md" href = "https://www.python.org/ftp/python/3.10.8/python-3.10.8-amd64.exe">DOWNLOAD</a>
					</div>
				</div>
		</div>
		<footer className = "min-w-full bg-black min-h-fit text-center text-white text-xs font-light py-4">
              <p>This web site is developed by gowdaman from 2nd year cse dept.</p>
          </footer>
		</>
		);
}
export default Software;
