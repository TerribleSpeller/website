import React from 'react'
import Dipimg from "../public/images/DIP.png";
import Link from 'next/link'
import Image from 'next/image';


//Don't know why I called it AboutUs when its just me. 
const About = () => {
    return(
        <div className='container'>
            <div className="Row">
                <div className="col-lg">
                    <div className="row g-0 border flex-md-column d-flex rounded overflow-hidden mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static front-page-landing">
                            <div className="d-flex flex-row">
                                <div
                                className="mx-auto"
                                style={{
                                "flex-grow": "1",
                                "align-items": "center",
                                display: "flex",
                                }}
                                >
                                    <Image
                                    className={"img-circle mx-auto"}
                                    src={Dipimg}
                                    alt="Cool Avatar I swear"
                                    />
     
                                </div>

                                <div className="my-auto" style={{ "flex-grow": "1" }}>
                                <h1>About me</h1>
                                </div>
                                </div>
                                <hr className="border border-white" />
                                <p
                                className="card-text mb-auto"
                                style={{ "text-align": "justify" }}
                                >
                                Hey, as introduced on the home page, <Link href="/" className="nav-link "><span>Home Page</span></Link>, I'm Terriblespeller, an internet horse person with interests in programming, website design, writing stories, reviewing stories, drawing maps, and creating obscure lore via the means of unconvntional methods (like using maps to show socio-economic effects of a clearly fictional event). This website serves as an introduction to me and as also a playground for me to test out new programming skills. This About Us Page serves as both as a copy of the introduction on the Home Page, along with detailing with what this website was made with, and my contacts - so that in the rare case you want to talk with me, you can.</p>
                                <br></br>
                                <p className="card-text mb-auto"
                                style={{ "text-align": "justify" }}> For note, this website was compiled utilizing Bootstrap, React.js, React-dom, and React-dom-router. I would've used Express.js and maybe even integrated mongoDB, but Github doesn't allow server side hosting, so until I have the finances to fund my own server with my own custom URL, that's not happening. 
                                </p>
                                <hr className="border border-white" />
                                <p className="card-text mb-auto"
                                style={{ "text-align": "justify" }}>Social Media I actually use:</p>
                                <ul>
                                    <li>Discord: Username: @terrihbahspehlar / Display Name:TerrihbahSpehlar#9252</li>
                                    <li><a className="nav-link" href="https://github.com/TerribleSpeller">Github</a>: terriblespeller</li>
                                    <li><a className="nav-link" href="https://www.fimfiction.net/user/326078/TerribleSpeller">Fimfiction</a>: TerribleSpeller</li>
                                    <li><a className="nav-link" href="https://www.reddit.com/user/TerribleSpeller_">Reddit</a>: u/TerribleSpeller_</li>
                                </ul>
                                <p className="card-text mb-auto"
                                style={{ "text-align": "justify" }}>Apart from these websites, <strong>I do not use any other social media.</strong> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;