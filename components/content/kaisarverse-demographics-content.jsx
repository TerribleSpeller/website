import React from "react";
import Link from 'next/link';
import Demgfx from '../../public/images/Demographics20.png'
import fig1 from '../../public/images/demographics/Demographics.png'
import Image from 'next/image';


const KaisarverseDemographicsContent = () => {
    return(
        <>
            <div className="col p-4 d-flex flex-column position-static bg-whites"> 
                <h2 className="d-inline-block mb-2" style={{"textDecoration":"underline"}}><b>Demographics of the Empire</b></h2>
                <div> {/*Main Content*/}
                    <table className="infobox">
                            <caption className="infobox-title ">Demographics of <span >MineLegotia and Equestria</span></caption>
                            <tbody>      
                                <tr>
                                    <td colspan="2">
                                        <span><Image src={Demgfx} alt="Demographics" width={400}/></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2">
                                        <center><span>Population Pyramid, 2390 ALB</span></center>
                                    </td>
                                </tr>                      
                                <tr>
                                    <td scope="row"className="infobox-left">Population</td>
                                    <td className="infobox-right"><span className="infobox-right">10.493.000.000 (2nd)</span></td>
                                </tr>
                                <tr>
                                    <td scope="row"className="infobox-left">Growth Rate</td>
                                    <td className="infobox-right"><span className="infobox-right">3.3% (2389 Est)</span></td>
                                </tr>
                                <tr>
                                    <td scope="row"className="infobox-left">Birth Rate</td>
                                    <td className="infobox-right"><span className="infobox-right">33 Births/1.000 Population (2389 Est)</span></td>
                                </tr>
                                <tr>
                                    <td scope="row"className="infobox-left">Death Rate</td>
                                    <td className="infobox-right"><span className="infobox-right">21 Deaths/1.000 Population (2389 Est)</span></td>
                                </tr>
                                <tr>
                                    <td scope="row"className="infobox-left">Life expectancy	</td>
                                    <td className="infobox-right"><span className="infobox-right">189.34 years</span></td>
                                </tr>
                                <tr>
                                    <td scope="row"className="infobox-left">Fertility Rate	</td>
                                    <td className="infobox-right"><span className="infobox-right">3.2 children born/female (2388 Est) </span></td>
                                </tr>
                                <tr>
                                    <td scope="row"className="infobox-left">Infant Mortality Rate	</td>
                                    <td className="infobox-right"><span className="infobox-right">1.1 deaths/1000 live births </span></td>
                                </tr>
                                <tr>
                                    <td scope="row"className="infobox-left">Net Migration Rate	</td>
                                    <td className="infobox-right"><span className="infobox-right">3.1 Migrants/1.000 Population (2387 Est)</span></td>
                                </tr>
                                <tr><th colspan="2" style={{"background":"lightblue", "textAlign": "center"}}>Age Structure</th></tr>
                                <tr>
                                    <td scope="row"className="infobox-left">0-19	</td>
                                    <td className="infobox-right"><span className="infobox-right">4.42%</span></td>
                                </tr>
                                <tr>
                                    <td scope="row"className="infobox-left">20-160	</td>
                                    <td className="infobox-right"><span className="infobox-right">56.89%</span></td>
                                </tr>
                                <tr>
                                    <td scope="row"className="infobox-left">160 and above	</td>
                                    <td className="infobox-right"><span className="infobox-right">38.69%</span></td>
                                </tr>
                                <tr><th colspan="2" style={{"background":"lightblue", "textAlign": "center"}}>Sex Ratio</th></tr>
                                <tr>
                                    <td scope="row"className="infobox-left">Total	</td>
                                    <td className="infobox-right"><span className="infobox-right">0.98 male(s)/female(s) (2389 Est)</span></td>
                                </tr>
                                <tr>
                                    <td scope="row"className="infobox-left">At Birth	</td>
                                    <td className="infobox-right"><span className="infobox-right">1.01 males(s)/female(s) (2389)</span></td>
                                </tr>
                                <tr><th colspan="2" style={{"background":"lightblue", "textAlign": "center"}}>Nationality</th></tr>
                                <tr>
                                    <td scope="row"className="infobox-left">Nationality	</td>
                                    <td className="infobox-right"><span className="infobox-right">Minean </span></td>
                                </tr>
                                <tr>
                                    <td scope="row"className="infobox-left">Major Species	</td>
                                    <td className="infobox-right"><span className="infobox-right">Humans (19.16%)</span></td>
                                </tr>
                                
                            </tbody>
                    </table>
                        <p className="card-text mb-auto" style={{"text-align":"justify;"}}>
                            The demographic features of the population of Empire  include population density, ethnicity, education level, health of the populace, economic status, religious affiliations, species, and other aspects regarding the population.
                        </p>
                        <br/>
                        <p className="card-text mb-auto" style={{"text-align":"justify;"}}>
                            According to the Statistical Bureau of MineLegotia and Equestria, the population of MineLegotia and Equestria as of February 2389 is at 10.435 billion, including foreign residents. The population of Imperial nationals only was 10.319 billion in December 2388. 
                        </p>
                        <br/>
                        <h3>Species</h3>
                        <hr/>
                        <figure>
                            <Image src={fig1} style={{"marginLeft": "auto", "marginRight": "auto", "display":"block"}} alt="Population Chart"/>
                            <figcaption style={{"textAlign": "center"}}>Population chart as of February 2389 ALB</figcaption>
                        </figure>
                        <br/>
                        <p className="card-text mb-auto" style={{"text-align":"justify;"}}>
                            The population of the Empire is split over several species. Despite humans technically being stated as the main major species despite that not being the definition of 'major', the humans constitute largest species in the Empire. Historically, citizenship based on species have been suspended as a valid method of categorisation since the early 500s, when early Kingdoms and Empires found it rather inefficient to discriminate potential soldiers and workers. As such, in the Imperial Census, naturalised and native-born people within the Empire are considered as 'MineLegoEquestrian'. The increasing utilization of bioengineering had blurred lines between variou species even more, making any discrimination based on species near useless in terms of rationality that regular racism gains credibility just from such a phenomenon. 
                        </p>
                        <br/>
                        <p className="card-text mb-auto" style={{"text-align":"justify;"}}>
                            The major groups - in decreasing absolute numbers - are humans, terrakudas, unicorns, pegasi, griffons, changelings, hippogriffs, zebras, and kirins. These groups constitute the majority of the population and are species constitute less than a percent to overall total. 
                        </p>
                        <br/>
                        <h3>Citizenship</h3>
                        <hr/>
                        <p className="card-text mb-auto" style={{"text-align":"justify;"}}>
                            Imperial citizenship is conferred <Link href="https://en.wikipedia.org/wiki/Jus_soli" className="link-color-unique">Jus Soli</Link>. The reasoning behind this was a solution as to deal with the intricaties of <Link href="/worlds/kaisarverse/empire/history/post-federation-political-issues" className="link-color-unique">Post Federalisation Issues</Link>, creating the situation where Imperial citizens often hold two different citizenships. From their home state and from the Empire as a whole as well. 
                        </p>
                        <br/>
                        <p className="card-text mb-auto" style={{"text-align":"justify;"}}>
                            Often, the process of naturalization is a simple one that is relatively straight forward. With the only requirements being that an individual must hold residency within the Empire for at least a total of fifteen (15) years, hold a job for a simple majority of their stay within the Empire, and be able to converse properly within the Imperial tongue of 'MineLegoEquestrian'. 
                        </p>
                </div>
            </div>
        </>
    );
}

export default KaisarverseDemographicsContent;