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

                                        </p>
                                        <ol type="a">
                                            <li>has parents who both hold identification documents indicating their origin from a province;</li>
                                            <li>is of direct descent to a 'Citizen';</li>
                                            <li>have resided in a Province as a residence for more than two years; or</li>
                                            <li>is married to a an existing 'National' of said for more than one year.</li>
                                        </ol>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Article 7.</span>  A 'Citizen' is hereby defined as a person who holds identification document(s) indicating their national identity to be of the Federal Commonwealth, in which the eligibility of obtaining such document(s) is as follows wherein they must be a person who has have served within the Armed Forces of the Federal Commonwealth for at least two (2) years    and has

                                        </p>
                                        <ol type="a">
                                            <li>parents, who both hold identification documents indicating their national identity to be of the Federal Commonwealth;</li>
                                            <li>the natural disposition of being a natural born 'National';</li>
                                            <li>have resided in the Federal Commonwealth for more than six years</li>
                                            <li>have married to a Federal Citizen for more than five years; and/or</li>
                                            <li>any other specifications detailed by furture legislation.</li>
                                        </ol>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Article 8.</span>   The Federal Commonwealth guarantees the following rights to its citizens,
                                        </p>
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
                                            <span className="section-head me-3">Article 10.</span>   The Kaisar be assisted by Ministries for the day-to-day administration of the Federal Commonwealth, with the confirmation of the National Parliament.

                                        </p>
                                        <ul>
                                            <li>The Formation, change, and Dissolution of Ministries shall be regulated by Imperial law.</li>
                                        </ul>
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

                                        </p>
                                        <ul>
                                            <li>Further provisions regarding international agreements shall be regulated by law.</li>
                                        </ul>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Article 15.</span>   The Kaisar may grant pardons, restoration of rights, with the approval and advice from the Supreme Court.
                                        </p>
                                    </div>
                                    <div id="chapter-4">
                                        <h4 className="mb-2">
                                            Section 4 : The Legislature of the Federal Commonwealth
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
                                            Section 5 : The Judiciary of the Federal Commonwealth
                                        </h4>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Article 22.</span>   The Upholding of the Law across the Federal Commonwealth shall be done by the Supreme Court. The court shall be staffed by seventeen Justices, three by the executive of each State, and one by the Kaisar. Each Justice shall serve until retirement by Free Will or death. Appointment to the office shall be confirmed by the National Parliament.
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
                                        <p className="mt-2">
                                            <span className="section-head me-3">Article 26.</span>   A Judicial Commision shall be established, and is to be independent and has the authority to propose candidates for the Supreme Court justices and other authorities to preserve and uphold the honor, dignity and conduct of judges.

                                        </p>
                                        <ol type="a">
                                            <li>A member of Judicial Commission shall have legal knowledge and experience as well as integrity and impeccable personality;</li>
                                            <li>A Judicial Commission member is appointed and discharged by the Kaisar with the approval of the National Parliament;</li>
                                            <li>The structure, position, and membership of the Judicial Commission are regulated by law.</li>
                                        </ol>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Article 27.</span>   A Constitutional Court shall be established, and is to be independent and has the authority to adjudicate at the first and final level whose decision is final to review laws against the Constitution, to adjudicate on authority disputes of state institutions whose authorities are given by the Constitution, to adjudicate on the dissolution of a political party, and to adjudicate on disputes regarding the result of a general election.

                                        </p>
                                        <ol type="a">
                                            <li>The Constitutional Court shall reserve the right to render a decision on the opinion of the National Parliament regarding an alleged violation by the Kaisar according to the Constitution;</li>
                                            <li>The Constitutional Court shall be established of nine members, three by the Kaisar, three by the Supreme Court, and three by the National Parliament;</li>
                                            <li>The Chief Justice and Deputy Chief Justice will be elected from amongst the constitutional judges.</li>
                                            <li>A member of the Constitutional Court shall have legal knowledge and experience as well as integrity and proper personality.</li>
                                            <li>The appointment and discharge of constitutional justices, the judicial procedure, and other provisions regarding the Constitutional Court are regulated by law.</li>
                                        </ol>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Article 28.</span>   The requirements of the appointment and discharge of a judge are stipulated by law.
                                        </p>
                                    </div>
                                    <div id="chapter-6">
                                        <h4 className="mb-2">
                                            Section 6 : The Defense of the Commonwealth
                                        </h4>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Article 29.</span>   The Military of the Federal Commonwealth shall be formed in order to protect the lands, citizens, and dignity of the Federal Commonwealth as a whole.
                                        </p>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Article 30.</span>   The Military shall be subservient to deployment by the National Parliament, and commanded by the Kaisar. Additional regulation regarding the specifications of the deployment of the Military shall be stated in Imperial Law.
                                        </p>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Article 31.</span>   The Military shall be subjected to regulation via the Laws of the Federal Commonwealth, and all within the Military can be impeached for various crimes against the Federal Commonwealth, not limited to,

                                        </p>
                                        <ul>
                                            <li>Treason;</li>
                                            <li>Collusion with foreign powers;</li>
                                            <li>Incompetence;</li>
                                            <li>Corruption;</li>
                                            <li>Any other charges, to be specified within Imperial Law.</li>
                                        </ul>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Article 32.</span>   From hence, every citizen has the right and duty to participate in the defense and security of the state.
                                        </p>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Article 33.</span>   The Federal Commonwealth shall reserve the right to maintain a military consisting of the Army, Navy, Air Force, and other branches of the military as deemed necessary by the National Parliament. Along with a National Police Force, and other law enforcement agencies as deemed necessary by the National Parliament. The details of such branches shall be specified within Imperial Law.
                                        </p>
                                    </div>
                                    <div id="chapter-7">
                                        <h4 className="mb-2">
                                            Section 7: The Details Regarding the Rights of States within the Federal Commonwealth
                                        </h4>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Article 37.</span>  All the states - defined as the constituent states that willingly subjugated themselves underneath the Federal Commonwealth - within may adopt a constitution of their own, under the condition it uses this document as a basis. For the Federal Commonwealth was formed to protect the States' interests, and such, their soverignty to dictate their own laws must be respected by the Imperial Government.
                                        </p>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Article 38.</span>   The States shall be responsible for the well-being of the citizens within their boundaries, and all actions taken by the States administration should be dedicated to the well-being of the citizens.
                                        </p>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Article 39.</span>   The States shall not be allowed to maintain their own armed forces, this is the duty of the Federal Government, not the State’s Administration.
                                        </p>

                                        <p className="mt-2">
                                            <span className="section-head me-3">Article 40.</span>   States shall be made out of Provinces, these provinces reserve the right to create “Provincial Laws”, have their own Executives, Legislatures, and Judiciaries, under the condition they stay subservient to the State Government, the same way that it is subservient to the Federal Government.
                                        </p>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Article 41.</span>   No State, Province, nor any smaller legal entity, reserve the right to legally succeed from the Federal Commonwealth. However, Provinces, or any smaller legal entity limited to a town, reserve the right to legally succeed from a higher entity to form their own higher legal entity, or join another legal entity within the Federal Commonwealth.
                                        </p>
                                    </div>
                                    <div id="chapter-8">
                                        <h4 className="mb-2">
                                            Section 8: Other Specifications Regarding the Formation of the Federal Commonwealth
                                        </h4>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Article 42.</span>  All Debts contracted and Engagements entered into, before the Adoption of this Constitution, shall be as valid against the States which maketh this Federal Commonwealth, under this Constitution, as under the prior States’ Laws.
                                        </p>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Article 43.</span>   All members of the Federal, State, Provincial, and smaller governmental entities’ government and structure shall be bound by Oath and Affirmation, to support this Constitution, regardless of religion and any political background.
                                        </p>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Article 44.</span> The power to collect taxes, shall be invested within the Executive Branch of the Imperial and State Governments. With the implementation and specification of taxes specified by the various legislative bodies at the Imperial, State, Provincial Levels.
                                        </p>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Article 45.</span>In no incident may a person charged with any type of crime, or held to service or labour, in one State, flee to another State uncharged. On Demand of the respective authorities within a different State, be returned to the State having jurisdiction of the crime, or claim of service or labour.
                                        </p>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Article 46.</span>In no way may two states, or more, engage in military combat against each other. In the event such an incident occurs, the government of the inciting state shall be prosecuted for disturbing the peace of the Federal Commonwealth.
                                        </p>
                                    </div>
                                    <div id="chapter-9">
                                        <h4 className="mb-2">
                                            Section 9: Regarding Amendments to this Document
                                        </h4>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Article 47.</span>  The National Parliament with a two-thirds majority, when necessary, may propose amendments to this Constitution, with approval from an absolute majority of all States within the Federal Commonwealth.
                                        </p>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Article 48.</span>   A proposal to amend the articles of this Constitution can be put on in the agenda of the National Parliament session if it is submitted by at least 1/3 of the total number of the National Parliament members.
                                        </p>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Article 49.</span> Any proposal to amend the articles of this Constitution is submitted in writing and clearly states which part to be amended and the reasons for the amendment.
                                        </p>
                                    </div>
                                    <div id="chapter-10">
                                    <h4 className="mb-2">
                                            Section 10: Amendments to this Document
                                        </h4>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Amendment One.</span>   The right of the people to be secure in their persons, houses, papers, and effects, against unreasonable searches and seizures, shall not be violated, and no Warrants shall issue, but upon probable cause, supported by Oath or affirmation, and particularly describing the place to be searched, and the persons or things to be seized.
                                        </p>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Amendment Two.</span>   The right of citizens of the Federal Commonwealth to vote shall not be denied or abridged by the Federal Commonwealth or by any State on account of religion, species, or previous condition of servitude, and shall be regulated by the National Parliament by appropriate legislation.
                                        </p>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Amendment Three.</span> The National Parliament shall be composed of Member of Parliaments appropriate from each Province, elected by the people thereof, for six years; and each Member of Parliament shall have one vote. The electors in each Province shall have the qualifications requisite for electors of the most numerous branch of the Provincial legislatures. When vacancies happen in the representation of any Province in the National Parliament, the executive authority of such Province shall issue writs of election to fill such vacancies: Provided, That the legislature of any Province may empower the executive thereof to make temporary appointments until the people fill the vacancies by election as the legislature may direct. This amendment shall not be so construed as to affect the election or term of any Member of Parliament chosen before it becomes valid as part of the Constitution.
                                        </p>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Amendment Four.</span>    No person may hold power over three terms within any major executive positions within the Imperial, State, Provincial Governments, and shall be regulated by the National Parliament by appropriate legislation.
                                        </p>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Amendment Five.</span>   In order to ensure proper procedural ongoings of the government, a Supreme Audit Agency shall be formed to audit the activities of the MineLegoEquestrian Government and all smaller legal entities to ensure proper usage of funds, with details regarding it regulated by the National Parliament by appropriate legislation.
                                        </p>
                                        <ol type="a">
                                            <ul> The Agency shall have the ability to arrest, and prosecute according to Imperial and States laws regarding embezzlement, corruption, kickbacks, and others.</ul>
                                        </ol>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Amendment Six.</span> The Federal Commonwealth shall not under any situation be allowed to use irregular/magical methods to peer to violate a person’s privacy and innermost sanctum, which is the mind; and shall be regulated by the National Parliament by appropriate legislation.
                                        </p>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Amendment Seven.</span> Understanding the vast reach of the Federal Government, it is imperative an Ethics Committee shall be formed to ensure proper procedural ongoings within the Federal Government are in line with the Constitution and basic morality.
                                        </p>
                                        <ol type="a">
                                            <ul>The Ethics Committee shall have the ability to issue warrants towards Federal Officials who violate the basic Manehatten Universal Rights Declaration and will  be regulated by the National Parliament by appropriate legislation.</ul>
                                        </ol>
                                        <p className="mt-2">
                                            <span className="section-head me-3">Amendment Eight.</span> Recognizing the deeds of the Lipas in the past, and having been critical in their initiatives to prepare contigencies for the future, an Office of Lipas Matters shall be formed to ensure proper coordination between the Federal Commonwealth and the Lipas, and to ensure proper representation of the Lipas within the Federal Commonwealth's government, and shall be regulated by the National Parliament by appropriate legislation.
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