import React from 'react';
import Link from 'next/link'

const Error = () => {
    return(
        <div className="container">
            <div className="Middle1Container">
                 <div className="textContainer"  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', "flex-direction": 'column'}}>
                    <h1>Error <b>404</b> - Page Not Found</h1>
                    <img className="mb-2 mt-2" src="https://i.imgflip.com/7jff7j.jpg" alt="funni image"/>
                    <p className="card-text mb-auto" style={{ "text-align": "justify" }}>Please return to the <Link href="/" className="nav-link link-module"><span>Main Page</span></Link>.</p>
                </div>
            </div>
        </div>
    )
}

export default Error;