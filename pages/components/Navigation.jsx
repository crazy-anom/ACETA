import React from 'react';

const Navigation = ()=>{
    return (
            <>
                <nav className = "flex justify-between px-5 py-5 items-center">
                    <h1 className = "font-bold text-2xl"><span className = "text-red-400">A</span>CETA</h1>
                    <ol className = "flex justify-between text-sm">
                        <li className = "ml-5 hover:text-red-400"><a href="./">Home</a></li>
                        <li className = "ml-5 hover:text-red-400"><a href="./Learn">Learn</a></li>
                        <li className = "ml-5 hover:text-red-400"><a href="./Software">Software</a></li>
                        <li className = "ml-5 hover:text-red-400"><a href="./Event">Event</a></li>
                        <li className = "ml-5 hover:text-red-400"><a href="./Help">Help</a></li>
                    </ol>
                </nav>
            </>
        );
}

export default Navigation;
