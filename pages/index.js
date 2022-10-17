import Head from 'next/head'
import Image from 'next/image'
import Navigation from './components/Navigation'
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>ACETA CLUB</title>
        <meta name="description" content="ACETA club Achariya college of engineering technology developed by gowdaman 2nd year" />
        <link rel="icon" href=""/>
      </Head>
      <main className="">
          <Navigation />
          <div className = "App px-10 min-h-fit ">
              <div className = " min-w-screen text-center py-10 leading-10">
                <h1 className = "font-bold text-4xl"><span className = "text-red-400">ACETA</span> CLUB</h1>
                <h1 className = "font-bold text-1xl uppercase"> presents</h1>
                <h2 className = "font-bold text-1xl uppercase text-red-200 ">   ACETA CODING MAFIA</h2>
                <p className = "text-sm font-light text-gray-500 mb-4">
                  Welcome you all guy's , here you can get some video tutorials and programming software. It will help you a lot to learn to code and get some stuff to become a programmer.
                </p>
                <a href = "./Learn" className = 'p-2 rounded-sm transition ease-in-out delay-400  bg-red-400 hover:-translate-y-1 hover:bg-red-500 duration-300 text-white font-mono'>Learn to code</a>
              </div>
            <div className="">
              <h3 className = "font-semibold mb-2"> ABOUT ACETA</h3>
              <p className = "text-gray-500 text-sm mb-10">Aceta is an computer science club by the students of achariya college of engineering technology.Here all the member in the club guid all years buddies to get latest technical updates for there future use.</p>
            </div>
            <div className="mb-10">
              <h3 className = "font-semibold mb-2"> HOW TO LEARN</h3>
              <p className = "text-gray-500 text-sm mb-5">Our club collected some usefull tutorial video for you all, using those video you can learn basic of trending programming languages for free and easy</p>
              <p className = "text-gray-500 text-sm mb-5">To get watch the tutorial videos, go to Navigation bar on top and click learn tab or Learn to code button on the home.</p>
              <a href = "./Learn" className = 'p-2 rounded-sm transition ease-in-out delay-400  bg-red-400 hover:-translate-y-1 hover:bg-red-500 duration-300 text-white font-mono'>Learn</a>
            </div>

            <div className="mb-20">
              <h3 className = "font-semibold mb-2">SOFTWARE TO CODE</h3>
              <p className = "text-gray-500 text-sm mb-5">We are here for  you to get an open source and good IDE for programming. don't worry about the software , we provide the latest Ide software informations and files to make your work easy.</p>
              <p className = "text-gray-500 text-sm mb-5">To get Latest software, go to Navigation bar on top and click Software tab or Get Software button on the home.</p>
              <a href = "./Software" className = 'p-2 rounded-sm transition ease-in-out delay-400  bg-red-400 hover:-translate-y-1 hover:bg-red-500 duration-300 text-white font-mono'>Get Software</a>
            </div>
          </div>
          <footer className = "min-w-full bg-black min-h-fit text-center text-white text-xs font-light py-4">
              <p>This web site is developed by gowdaman from 2nd year cse dept.</p>
          </footer>
      </main>
    </div>
  )
}
