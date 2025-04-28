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
                                                <span className="infobox-right">Imperial Archives of the Empire, Xiahe</span>
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
                                    The Constitution of 1038 ALB for the Unification of the various nations of the world, Equs. (Commonly abbreviated as CU-1038) is the supreme law and basis for all laws of the Empire.
                                </p>
                                <p>
                                    The constitution was written in April, June, and July 1038 ALB, in the final months of the Second Unification War. It uses as a central basis for a variety of constitutions of constituent states of the Empire. It was abrogated temporarily during the Great Multiversal War, and reinstalled afterwards.
                                </p>
                                <p>
                                    The Constitution put forwards the principles of Autonomy, National Soverignty, Universal Rights, and also separation of powers. The Governmental System could be described as "Imperial with Democratic Characteristics" or "Federal with Unitary Characteristics" or "A combination of systems promoting stability and harmony". Following the Great Multiversal War, several amendments had been attached to the Constitution, along with the implementation of an Ethics Committee.
                                </p>
                                <div id="actual-contents" className="mt-3">
                                    <h2>Contents</h2>
                                    <hr />
                                    <div id="preamble">
                                        <h3>Preamble</h3>
                                        <p>
                                            <i>We,</i> the Committee on Establishing a United State in theWorld, seeing that the faith of our people has placed in us to determine the fate of our Fatherlands and Motherlands;
                                        </p>
                                        <p>
                                            <i>Expressing</i> our united will to fulfill the God's commandments upon our people;
                                        </p>
                                        <p>
                                            <i>Realizing</i>  that we cannot fulfill the God's commandments if we are divided among ourselves and continuously fight one another ;
                                        </p>
                                        <p>
                                            <i>Valuing</i> the deaths of many in their struggle to bring about peace to the continent;
                                        </p>
                                        <p>
                                            <i>Realizing</i> that the lack of a basic law within the state may be used by third parties to exploit the people of the state;
                                        </p>
                                        <p>
                                            <i>Understanding</i> that the freedom of the people of the Continent must be guaranteed and their rights protected well, that we shall lay down a proper governance system within this document;
                                        </p>
                                        <p>
                                            <i>Hereby</i> adopt this Constitution as the most basic law and organ for Governance of the state hereby known as "<i>The Federal Commonwealth of the Empire of Minean and Perdeland, Hiplegref Queendom, Kristal Diguo, Associated States of Griffefkind, Zongmao Federated Republic, Qirine Diguo, Bianxingling Federal State, and Constituent States of the Continents of Sejukland, Minea, Legti, Madi, and Pohoska</i>".
                                        </p>
                                    </div>
                                    <div id="chapter-1">
                                        <h4 className="mb-2">
                                            Section 1 : Fundamental Principles for the Governance of The Federal Commonwealth of the Empire of Minean and Perdeland, Hiplegref Queendom, Kristal Diguo, Associated States of Griffefkind, Zongmao Federated Republic, Qirine Diguo, Bianxingling Federal State, and Constituent States of the Continents of Sejukland, Minea, Legti, Madi, and Pohoska'
                                        </h4>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Article 1.</span>  The Federal Commonwealth of the Empire of Minean and Perdeland, Hiplegref Queendom, Kristal Diguo, Associated States of Griffefkind, Zongmao Federated Republic, Qirine Diguo, Bianxingling Federal State, and Constituent States of the Continents of Sejukland, Minea, Legti, Madi, and Pohoska' is a Sovereign Federation made out of several states, based upon the principles of Democracy and Equality. The Federal Commonwealth - and it’s states - have the right, capacity and ability to exercise it’s Law and Power over its Territory over Land, Sea, and Air. All people, resources, creatures, and objects found within Federal Territory will be subject to the laws of the Federal Commonwealth (henceforth referred to as ‘Imperial Law’) and the laws of State (henceforth referred to as ‘State Law’). The Federal Commonwealth reserves the right to exercise it’s law upon the above subjects and the States within the Federal Commonwealth. The Government of the Federal Commonwealth of Fundamental Principles for the Governance of 'The Federal Commonwealth of the Empire of Minean and Perdeland, Hiplegref Queendom, Kristal Diguo, Associated States of Griffefkind, Zongmao Federated Republic, Qirine Diguo, Bianxingling Federal State, and Constituent States of the Continents of Sejukland, Minea, Legti, Madi, and Pohoska' holds the responsibility of any self-respecting government to maintain basic rights to all of it’s citizens within its territories and aboard.
                                        </p>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Article 2.</span>   The people of the Federal Commonwealth that are recognized are it’s Citizens and Nationals, are a backbone of the Federal Commonwealth and should be treated as such. The Citizens of the Federal Commonwealth may involve themselves within the political process via a representative body known as the “Federal Parliament” which will be made out of representatives from the Provinces of the Federal Commonwealth.
                                        </p>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Article 3.</span>   The States of the Federal Commonwealth are subservient to the Federal Government, however, they may have their own Executives, Legislative, Judicial, and Administrations.
                                        </p>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Article 4.</span>   The Federal Commonwealth recognizes the self-evident truth that all creatures are created equal and shall be treated as so.
                                        </p>
                                    </div>
                                    <div id="chapter-2">
                                        <h4 className="mb-2">
                                            Section 2 : The People of the Federal Commonwealth and their Rights and Responsibilities
                                        </h4>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Article 6.</span>  A 'National' is hereby defined as a person who has
                                            <ol type="a">
                                                <li>has parents who both hold identification documents indicating their origin from a province;</li>
                                                <li>is of direct descent to a 'Citizen';</li>
                                                <li>have resided in a Province as a residence for more than two years; or</li>
                                                <li>is married to a an existing 'National' of said for more than one year.</li>
                                            </ol>
                                        </p>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Article 7.</span>  A 'Citizen' is hereby defined as a person who holds identification document(s) indicating their national identity to be of the Federal Commonwealth, in which the eligibility of obtaining such document(s) is as follows wherein they must be a person who has have served within the Armed Forces of the Federal Commonwealth for at least two (2) years    and has
                                            <ol type="a">
                                                <li>parents, who both hold identification documents indicating their national identity to be of the Federal Commonwealth;</li>
                                                <li>the natural disposition of being a natural born 'National';</li>
                                                <li>have resided in the Federal Commonwealth for more than six years</li>
                                                <li>have married to a Federal Citizen for more than five years; and/or</li>
                                                <li>any other specifications detailed by furture legislation.</li>
                                            </ol>
                                        </p>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Article 8.</span>   The Federal Commonwealth guarantees the following rights to its citizens,
                                            <ol type="a">
                                                <li>Right to Free Speech;</li>
                                                <li>Right to Due Process of the Law;</li>
                                                <li>Right to Freedom of Movement;</li>
                                                <li>Right to Privacy;</li>
                                                <li>Right to Protest;</li>
                                                <li>Right to Freedom of Information;</li>
                                                <li>Right to Private Property;</li>
                                                <li>Right to Freedom of Religion;</li>
                                                <li>Right to Freedom of Association;</li>
                                                <li>Right to Freedom of Vote; &</li>
                                                <li>Right to Self Defense.</li>
                                            </ol>
                                            The definitions of the Rights listed in Article 8(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k) are as per the Manehatten Universal Rights Declaration.
                                        </p>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Article 9.</span>   Citizens of the Federal Commonwealth should have knowledge of how the state they reside in, the state they fund through their taxes, the state they trust to protect them, is run. Thus, they must not be separated from the information of the daily runnings of the state.
                                        </p>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Article 10.</span>   Citizens of the Federal Commonwealth’s rights shall not be separated from their responsibilities, and thus the most basic responsibility of the Citizens should be to pay their taxes.
                                        </p>
                                    </div>
                                    <div id="chapter-3">
                                        <h4 className="mb-2">
                                            Section 3 : The Administration of the Federal Commonwealth
                                        </h4>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Article 9.</span>   The Kaisar holds the power of government in accordance with the Constitution.
                                        </p>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Article 10.</span>   The Kaisar be assisted by Ministries for the day-to-day administration of the Empire, with the confirmation of the National Parliament.
                                            <ul>
                                                <li>The Formation, change, and Dissolution of Ministries shall be regulated by Imperial law.</li>
                                            </ul>
                                        </p>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Article 11.</span>   The Kaisar is entitled to submit bills to the National Parliament
                                        </p>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Article 12.</span>   The Kaisar is entitled to issue regulations, either through themself, or their delegated ministries, in order to carry out the law.
                                        </p>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Article 13.</span>   The Kaisar with the approval of the National Parliament may declare war, make peace, and conclude treaties with other countries.
                                        </p>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Article 14.</span>   The Kaisar in making other international agreements that will produce an extensive and fundamental impact on the lives of the people which is linked to the state financial burden, and/or that will require an amendment to or the enactment of a law, shall first obtain the approval of the National Parliament.
                                            <ul>
                                                <li>Further provisions regarding international agreements shall be regulated by law.</li>
                                            </ul>
                                        </p>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Article 15.</span>   The Kaisar may grant pardons, restoration of rights, with the approval and advice from the Supreme Court.
                                        </p>
                                    </div>
                                    <div id="chapter-4">
                                        <h4 className="mb-2">
                                            Section 4 : The Legislature of the Empire
                                        </h4>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Article 16.</span>   The laws of the Federal Commonwealth can be created, modified, and repealed by the organisation known as the National Parliament. Citizens shall freely be allowed to participate within the National Parliament. Each bill shall be discussed by the National Parliament and the Kaisar to reach joint approval. If a bill fails to reach joint approval, that bill shall not be reintroduced within the same National Parliament term of sessions. The Kaisar signs a jointly approved bill to become a law. If the Kaisar fails to sign a jointly approved bill within thirty (30) days following such approval, that bill shall legally become a law and must be promulgated.
                                        </p>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Article 17.</span>   The National Parliament shall oversee legislative, and oversee functions. In carrying out its functions, in addition to the rights regulated in other articles of this Constitution, the National Parliament shall hold the right of interpellation, the right of investigation, and the right to declare an opinion. Other than the rights regulated in other articles of this Constitution, every National Parliament member shall hold the right to submit questions, the right to propose suggestions and opinions, and the right of immunity. Further provisions on the rights of the National Parliament and the rights of National Parliament members shall be regulated by law. Additionally, National Parliament members reserve the right to submit bills
                                        </p>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Article 18.</span>   Members of the National Parliament shall be elected to their office by the citizens. Additional regulations concerning elections shall be regulated by law.
                                        </p>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Article 19.</span>   Members of the National Parliament can be removed from office via referendum by the citizens. The removal of a member of the National Parliament shall be regulated by law.
                                        </p>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Article 20.</span>   Five (5) Members of the National Parliament shall be elected from each province within the Federal Commonwealth, and elected for a term of five (5) years. No member shall serve a term more than thrice.
                                        </p>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Article 21.</span>   The National Parliament shall at least convene once within a year.
                                        </p>
                                    </div>
                                    <div id="chapter-5">
                                        <h4 className="mb-2">
                                            Section 5 : The Judiciary of the Empire
                                        </h4>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Article 22.</span>   The Upholding of the Law across the Empire shall be done by the Supreme Court. The court shall be staffed by seventeen Justices, three by the executive of each State, and one by the Kaisar. Each Justice shall serve until retirement by Free Will or death. Appointment to the office shall be confirmed by the National Parliament.
                                        </p>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Article 23.</span>  The judicial power is independent authority in organizing the judicature for the sake of law enforcement and justice.
                                        </p>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Article 24.</span>   The Supreme Court shall function to review cases that require Imperial attention, review laws to ensure no contradiction occurs, to adjudicate at the level of cassation, to review ordinances and regulations below laws against laws, as well as other authorities given by law.
                                        </p>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Article 25.</span>   Under no circumstances, should any who takes office in the Judiciary also have a position in any of the other branches of government.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}