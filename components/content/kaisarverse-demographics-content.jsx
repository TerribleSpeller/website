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
                                    <td colSpan="2">
                                        <span><Image src={Demgfx} alt="Demographics" width={400}/></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
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
                                <tr><th colSpan="2" style={{"background":"lightblue", "textAlign": "center"}}>Age Structure</th></tr>
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
                                <tr><th colSpan="2" style={{"background":"lightblue", "textAlign": "center"}}>Sex Ratio</th></tr>
                                <tr>
                                    <td scope="row"className="infobox-left">Total	</td>
                                    <td className="infobox-right"><span className="infobox-right">0.98 male(s)/female(s) (2389 Est)</span></td>
                                </tr>
                                <tr>
                                    <td scope="row"className="infobox-left">At Birth	</td>
                                    <td className="infobox-right"><span className="infobox-right">1.01 males(s)/female(s) (2389)</span></td>
                                </tr>
                                <tr><th colSpan="2" style={{"background":"lightblue", "textAlign": "center"}}>Nationality</th></tr>
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
                            Often, the process of naturalization is a simple one that is relatively straight forward. With the only requirements being that an individual must hold residency within the Empire for at least a total of fifteen (15) years, hold a job for a simple majority of their stay within the Empire, and be able to converse properly within the Imperial tongue of '<Link href="/worlds/kaisarverse/language/minelegoequestrian" className="link-color-unique">MineLegoEquestrian</Link>'. 
                        </p>
                        <br/>
                        <p className="card-text mb-auto" style={{"text-align":"justify;"}}>
                            In addition to this method, citizenship requirements can be waived with three (3) years of service within the <Link href="/worlds/kaisarverse/empire/armed-forces" className="nav-link">Imperial Military</Link>, with exception to the Colonial Garrison, in which case service must be of at least five (5) years. 
                        </p>
                        <br/>
                        <h3>Languages</h3>
                        <hr/>
                        <p className="card-text mb-auto" style={{"text-align":"justify;"}}>
                            The official government language of the Empire is MineLegoEquestrian, which is separated into several dialects with the Minean dialect being considered Standard MineLegoEquestrian. 
                        </p>
                        <br/>
                        <p className="card-text mb-auto" style={{"text-align":"justify;"}}>
                            Other than MineLegoEquestrian, several native languages are recognised in official capacity, but not used in the governmental sense. With bilinigualism being heavily encouraged and mandated. Languages such as <Link href="/worlds/kaisarverse/language/minean" className="link-color-unique">Minean</Link>, <Link href="/worlds/kaisarverse/language/canterlotian" className="link-color-unique">Canterlotian</Link>, <Link href="/worlds/kaisarverse/language/canterlotian" className="link-color-unique">Manehattenite</Link>, <Link href="/worlds/kaisarverse/language/canterlotian" className="link-color-unique">Chanea</Link>, <Link href="/worlds/kaisarverse/language/depiea" className="link-color-unique">Depiea</Link>, <Link href="/worlds/kaisarverse/language/kirpe" className="link-color-unique">Kirpe</Link>, and <Link href="/worlds/kaisarverse/language/peoskt" className="link-color-unique">Peoskt</Link> are used in their native regions, and often used as a secondary language for local affairs. These languages, have recently been labelled as officially protected languages since 1203 ALB, where a majority of native speakers had lost the capability to speak the language due to <Link href="/worlds/kaisarverse/concept/memetics" className="link-color-unique">severe memetic attacks</Link> during the <Link href="/worlds/kaisarverse/empire/history/great-multiverse-war" className="link-color-unique">Great Multiverse War</Link>.
                        </p>
                        <br/>
                        <h3>Society</h3>
                        <hr/>
                        <h4>Lifestyle</h4>
                        <p className="card-text mb-auto" style={{"text-align":"justify;"}}>
                            MineLegoEquestrian citizens tend to enjoy a high standard of living brought on by modern technology and logistics. Nearly 80% of the population considers themselves to be Middle Class. With relatively high levels of happiness and satisifcationw ith life. 
                        </p>
                        <br/>
                        <p className="card-text mb-auto" style={{"text-align":"justify;"}}>
                            Some would consider MineLegoEquestrian as whole to be 'excessively liberal' in its regard to sex as an act between married couples. This alltitude has compounded with recent loopholes becoming mainstream with several couples expanding into polyamory by use of <Link href="/worlds/kaisarverse/nation/snowlandia" className="link-color-unique">Snowlandian</Link> marriage laws and the Imperial requirement to recognise all marriages from all Commonwealth states as valid. Public sex is also a decently common occurance, mostly in Equestrian and Minean states. On average, MineLegoEquestrian couples have sex 294 times per year. 
                        </p>
                        <br/>
                        <h4>Religion</h4>
                        <p className="card-text mb-auto" style={{"text-align":"justify;"}}>
                            A majority of MineLegoEquestrians are adherents to some doctrine of <Link href="kaisarverse/religion/agakrislean" className="link-color-unique"><span>Agakrislean</span></Link>, with 73% professing to be Agakriselanites. 46% of the total population follow after Kaisarite Agakrislean, 23% follow Lipe Agakrislean, with the remaining 4% split among a variety of smaller dominations. 23% follow  <Link href="kaisarverse/religion/greishite" className="link-color-unique">Greishite</Link>, an early split of Agakristelanite which merged with local Griffenshice religions. Atheists are unheard of in th enation. 
                        </p>
                        <br/>
                        <p className="card-text mb-auto" style={{"text-align":"justify;"}}>
                            There are also a notable number of minor cults surrounding the <Link href="/worlds/kaisarverse/char/imperial-family" className="link-color-unique">Imperial Family</Link>, professing in their nature as <Link href="kaisarverse/concept/lipas" className="link-color-unique"><span>Lipas</span></Link> to be divine. Their response to such worship is mixed. 
                        </p>
                        <br/>
                </div>
            </div>
        </>
    );
}

export default KaisarverseDemographicsContent;