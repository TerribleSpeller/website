import React from 'react';

const Error = () => {
    return(
        <div className="Container">
            <div className="Middle1Container">
                 <div className="textContainer"  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', "flex-direction": 'column'}}>
                    <h1>Error <b>404</b> - Page Not Found</h1>
                    <img className="mb-2 mt-2" src="https://i.imgflip.com/7jff7j.jpg" alt="funni image"/>
                    <p className="mt-2;">Please return to the <a href="../index.html">Main Page</a>.</p>
                </div>
            </div>
        </div>
    )
}

export default Error;