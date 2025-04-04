import React from "react";
import Link from 'next/link'
import { useState, useEffect } from "react";
import BureauContent from "./bureaucontent.jsx";
import Image from 'next/image';

function bureaucracyMain() {
    const [buttonclicked, setButtonClicked] = useState(false);

    const handleClick = () => {
        setButtonClicked(!buttonclicked);
    }



    return (
        <div className="container">
            <div className="col-lg">
                <div className="col">
                    <div className="row mb-3">
                        <div className="col mx-auto mx-3 px-3">
                            <h1 className="h1-title"><u>Bureacuracy Manifest</u></h1> {/* Apply the class directly to <h1> */}
                        </div>
                        <br />
                        <br />
                    </div>
                    <div
                        id="intro"
                        className={`fade-section ${buttonclicked ? "hidden" : "visible"}`} // Add animation classes
                    >                        
                    <div className="d-flex justify-content-center align-items-center" >
                            <div className="mx-5" style={{ "max-width": "40vw" }}>
                                <div className="card p-1 border-2 border-black bg-dark-subtle">
                                    <div className="container p-2 email" >
                                        <div id="top-data" className="m-1" style={{ "background": "url(/images/logos/email-classified-1.png) top right no-repeat;" }}>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <th style={{ "text-align": "right" }}>
                                                            From:
                                                        </th>
                                                        <td>
                                                            AlekiesihJingsu@Lipas.mle.int
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th style={{ "text-align": "right" }}>
                                                            To:
                                                        </th>
                                                        <td>
                                                            Lipas (Group), Imperial Ministers (Group)
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th style={{ "text-align": "right" }}>
                                                            Subject:
                                                        </th>
                                                        <td>
                                                            2385 - 2395 Decade Review
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th style={{ "text-align": "right" }}>
                                                            Date:
                                                        </th>
                                                        <td>
                                                            2396 Apr 4th - 02:43 AM
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <hr />
                                        <div className="message-content" >
                                            <p>
                                                This decade's review has been officially filed under 2396/04/04/0243-gBadwMJkd5. Please refer to it via the Imperial Archive System (IAS) under the following tags: <b>Decade Review</b>, <b>2385-2395 Decade Review</b>, <b>Lipas-Minister Coordination</b>.
                                            </p>
                                            <p>
                                                We've done great work this decade. And we're approaching the end of the 24th Century and the 25th Century is just around the corner. Let's maintain our steadfast and resolute coordination to ensure continued  dedication to achieving lasting greatness for the Commonwealth and to the noble cause of peace and development for all sapients.
                                            </p>
                                            <p>
                                                This decade has been a decade of great change and development, unseen in the last several centuries. We must ensure continued resolution and devoted emphasis towards Imperial Rejuvenation in the safety and well being of the citizens of our Commonwealth. That the ideals highlighted in the Treaty of Manehatten (1300/10/15/0001-TFTplBOk0k) are upheld.
                                            </p>
                                            <p>
                                                Here's to another decade of great work and dedication to the Commonwealth and the ideals of the Empire.
                                            </p>
                                            <p>
                                                <span id="clickbutton" className="nav-link" onClick={handleClick}>Here's the Link. </span>
                                            </p>
                                        </div>
                                        <hr />
                                        <div className="signature">
                                            <p>
                                                <b>Alekiesih Jingsu</b><br />
                                                <i>Administrator of Administrative Minutiae and Standards</i><br />
                                                <i>Head of the Lipas Coordination Committee</i>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <br />
                            </div>
                        </div>
                    </div>

                    <div
                        id="actual"
                        className={`fade-section ${buttonclicked ? "visible-content" : "hidden"}`}
                    >
                        <div className="d-flex justify-content-center align-items-center" >
                            <span id="clickbutton" className="nav-link" onClick={handleClick}>Return to Intro</span><br />
                        </div>
                        <BureauContent />

                    </div>
                </div>
            </div>
            <br />
            <br />
        </div>

    );
}

export default bureaucracyMain;