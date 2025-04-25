"use client";
import React from "react";
import Link from 'next/link'
import { MathJax, MathJaxContext } from "better-react-mathjax";
import Image from 'next/image';
import { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { GrLicense } from "react-icons/gr";
import { FaRegLightbulb } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from 'next/router';

export default function ConstitutionContent() {



    return (
        <>
            <div className="container">
                <div className="col-lg">
                    <div className="col">
                        <div id="cool as title" className="row mb-3">
                            <div className="col mx-auto mx-3 px-3">
                                <h1 className="h1-title"><u>Constitution of the Federal Commonwealth</u></h1>
                            </div>
                            <br />
                            <br />
                        </div>
                        <div id="content">
                            <div className="container">
                                <table className="infobox">
                                    <caption className="infobox-title">
                                        1038 ALB Commonwealth Constitution of <span>MineLegotia and Equestria</span>
                                    </caption>
                                    <tbody>
                                        <tr>
                                            <th colSpan="2" style={{ background: "lightblue", textAlign: "center" }}>
                                                Overview
                                            </th>
                                        </tr>
                                        <tr>
                                            <td scope="row" className="infobox-left">Original Title</td>
                                            <td className="infobox-right">
                                                <span className="infobox-right">
                                                    The Constitution of 1038 for the Unification of the various nations of our world, Equs.
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row" className="infobox-left">Jurisdiction</td>
                                            <td className="infobox-right">
                                                <span className="infobox-right">
                                                    <a className="link-color-unique" href="https://www.nationstates.net/nation=minelegotia_and_equestria">
                                                        MineLegotia and Equestria
                                                    </a>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row" className="infobox-left">Created</td>
                                            <td className="infobox-right">
                                                <span className="infobox-right">10th April - 6th July 1038 ALB</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row" className="infobox-left">Presented</td>
                                            <td className="infobox-right">
                                                <span className="infobox-right">6th July 1038 ALB</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row" className="infobox-left">Ratified</td>
                                            <td className="infobox-right">
                                                <span className="infobox-right">13th July 1038 ALB</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row" className="infobox-left">Date Effective</td>
                                            <td className="infobox-right">
                                                <span className="infobox-right">13th July 1038 ALB</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row" className="infobox-left">System</td>
                                            <td className="infobox-right">
                                                <span className="infobox-right">Federal Imperial Commonwealth</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th colSpan="2" style={{ background: "lightblue", textAlign: "center" }}>
                                                Government structure
                                            </th>
                                        </tr>
                                        <tr>
                                            <td scope="row" className="infobox-left">Branches</td>
                                            <td className="infobox-right">
                                                <span className="infobox-right">4</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row" className="infobox-left">Head of State</td>
                                            <td className="infobox-right">
                                                <span className="infobox-right">Kaisar</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row" className="infobox-left">Chambers</td>
                                            <td className="infobox-right">
                                                <span className="infobox-right">
                                                    Imperial Unification Government, consisting of the Imperial Federal Parliament, and the National Representative Parliaments
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row" className="infobox-left">Executive</td>
                                            <td className="infobox-right">
                                                <span className="infobox-right">The Imperial Cabinet, led by the Kaisar</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row" className="infobox-left">Judiciary</td>
                                            <td className="infobox-right">
                                                <span className="infobox-right">
                                                    Federal Court, Imperial Regional Federal Courts, and Judicial Commission for Legal Review
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row" className="infobox-left">Federalism</td>
                                            <td className="infobox-right">
                                                <span className="infobox-right">Federal</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row" className="infobox-left">Electoral College</td>
                                            <td className="infobox-right">
                                                <span className="infobox-right">No</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row" className="infobox-left">Entrenchments</td>
                                            <td className="infobox-right">
                                                <span className="infobox-right">7</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th colSpan="2" style={{ background: "lightblue", textAlign: "center" }}>
                                                History
                                            </th>
                                        </tr>
                                        <tr>
                                            <td scope="row" className="infobox-left">First Legislature</td>
                                            <td className="infobox-right">
                                                <span className="infobox-right">July 30th 1038 ALB</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row" className="infobox-left">First executive</td>
                                            <td className="infobox-right">
                                                <span className="infobox-right">July 7 1038 ALB</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row" className="infobox-left">First court</td>
                                            <td className="infobox-right">
                                                <span className="infobox-right">July 7 1038 ALB</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row" className="infobox-left">Amendments</td>
                                            <td className="infobox-right">
                                                <span className="infobox-right">10</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row" className="infobox-left">Last amended</td>
                                            <td className="infobox-right">
                                                <span className="infobox-right">April 5th 2343 ALB</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row" className="infobox-left">Location</td>
                                            <td className="infobox-right">
                                                <span className="infobox-right">Imperial Archives of the Empire, [Classifed]</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row" className="infobox-left">Commissioned by</td>
                                            <td className="infobox-right">
                                                <span className="infobox-right">
                                                    Preliminary Committee on Establishing a United State in the World
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row" className="infobox-left">Author(s)</td>
                                            <td className="infobox-right">
                                                <span className="infobox-right">
                                                    Committee on Establishing a United State in the World
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p>
                                    The Constitution of 1038 ALB for the Unification of the various nations of our world, Equs. (Commonly abbreviated as CU-1038) is the supreme law and basis for all laws of the Empire.
                                </p>
                                <p>
                                    The constitution was written in April, June, and July 1038 ALB, in the final months of the Second Unification War. It uses as a central basis for a variety of constitutions of constituent states of the Empire. It was abrogated temporarily during the Great Multiversal War, and reinstalled afterwards.
                                </p>
                                <p>
                                    The Constitution put forwards the principles of Autonomy, National Soverignty, Universal Rights, and also separation of powers. The Governmental System could be described as "Imperial with Democratic Characteristics" or "Federal with Unitary Characteristics" or "A combination of systems promoting stability and harmony". Following the Great Multiversal War, several amendments had been attached to the Constitution, along with the implementation of an Ethics Committee.
                                </p>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}