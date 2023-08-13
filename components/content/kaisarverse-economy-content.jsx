import React from "react";
import Link from 'next/link';

const KaisarverseEconomyContent = () => {
    return(
        <>
            <div className="col p-4 d-flex flex-column position-static bg-whites"> 
                <h2 className="d-inline-block mb-2" style={{"textDecoration":"underline"}}><b>Economy of the Empire</b></h2>
                <div> {/*Main Content*/}
                <table className="infobox">
                        <caption className="infobox-title ">Economy of <span >MineLegotia and Equestria</span></caption>
                        <tbody>
                            <tr>
                                <td scope="row"className="infobox-left"  >Currency</td>
                                <td  className="infobox-right"><span className="infobox-right">Rupas (IBC, Rs) (1$ = 1.5 Rupas)</span></td>
                            </tr>
                            <tr>
                            <td scope="row" className="infobox-left" >Fiscal Year</td>
                                <td  className="infobox-right"><span className="infobox-right">Calender Year</span></td>
                            </tr>
                            <tr><th colspan="2" style={{"background":"lightblue", "textAlign": "center"}}>External</th></tr>

                            <tr>
                                <td scope="row" className="infobox-left" >GDP</td>
                                <td  className="infobox-right"><span className="infobox-right">US$ 4,793 trillion (nominal; 2390 ALB)</span></td>
                            </tr>
                            <tr>
                                <td scope="row"className="infobox-left"  >GDP Growth</td>
                                <td  className="infobox-right"><span style={{"color": "green"}}>▲</span> 2.36%</td>
                            </tr>
                            <tr>
                                <td scope="row" className="infobox-left" >GDP per capita</td>
                                <td  className="infobox-right">US$ 43,584 (nominal; 2387 ALB)</td>
                            </tr>
                            <tr>
                                <td scope="row" className="infobox-left" >GDP By Sector</td>
                                <td className="infobox-right">
                                    <ul className="infobox-list" style={{"list-style-type": "none"}}>
                                        <li>Agriculture: 8.7%</li>
                                        <li>Manufacturing: 41.6%</li>
                                        <li>Services: 51.7%</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td scope="row" className="infobox-left" >Inflation</td>
                                <td className="infobox-right"><span style={{"color": "green"}}>▼</span> 1.9% (August, 2390 ALB)</td>
                            </tr>
                            <tr>
                                <td scope="row" className="infobox-left" >Poverty Below Poverty Line</td>
                                <td className="infobox-right"><span style={{"color": "green"}}>▼</span> 1.4% (2390 est.)</td>
                            </tr>
                            <tr>
                                <td scope="row" className="infobox-left" >Gini Coefficient</td>
                                <td className="infobox-right"><span style={{"color": "Red"}}>▲</span> 48.3 <span style={{"color": "Red"}}>Middle-High</span></td>
                            </tr>
                            <tr>
                                <td scope="row" className="infobox-left" >Human Development Index</td>
                                <td className="infobox-right"><span style={{"color": "Green"}}>▼</span> 97.7 <span style={{"color": "Green"}}>Very High</span></td>
                            </tr>
                            <tr>
                                <td scope="row" className="infobox-left" >Labour Force</td>
                                <td className="infobox-right">
                                <ul className="infobox-list" style={{"list-style-type": "none"}}>
                                        <li><span style={{"color": "Green"}}>▲</span> 8.125 Billion (2390 ALB) </li>
                                        <li>76.10% Employment Rate (2390)</li>
                                    </ul>
                                    
                                </td>
                            </tr>
                            <tr>
                                <td scope="row" className="infobox-left" >Labour Force by Occupation</td>
                                <td className="infobox-right">
                                <ul className="infobox-list" style={{"list-style-type": "none"}}>
                                        <li>Agriculture: 16.2%</li>
                                        <li>Bureaucracy: 20.4%</li>
                                        <li>Manufacturing: 22.1%</li>
                                        <li>Services: 41.3%</li>
                                    </ul>
                                    
                                </td>
                            </tr>
                            <tr>
                            <td scope="row" className="infobox-left" >Unemployment</td>
                                <td className="infobox-right">
                                <span style={{"color": "Red"}}>▲</span> 2.92%
                                    
                                </td>
                            </tr>
                            <tr>
                            <td scope="row" className="infobox-left" >Key Industries</td>
                                <td className="infobox-right">
                                Mining ore, steel, aluminium, coal,armaments, textiles, and apparels, information technology, food processing, ships, book publishing exports, mining, transportation equipment, aircraft, space launch vehicles, magically armed armaments, crystals, financial services, electric equipment semiconductors, consumer products, pharmaceutical products, bureaucratic services, bureaucracy, paper
                                    
                                </td>
                            </tr>
                            <tr><th colspan="2" style={{"background":"lightblue", "textAlign": "center"}}>External</th></tr>
                            <tr>
                            <td scope="row" className="infobox-left" >Exports</td>
                                <td className="infobox-right">
                                <span style={{"color": "Green"}}>▲</span> US$765.7 trillion
                                    
                                </td>
                            </tr>
                            <tr>
                                <td scope="row" className="infobox-left" >Export Goods</td>
                                <td className="infobox-right">
                                <ul className="infobox-list" style={{"list-style-type": "none"}}>
                                        <li>Manufactured goods 73.2%</li>
                                        <li>Fuels and Mining 23.7%</li>
                                        <li>Agriculture Products 2.7%</li>
                                        <li>Others 0.3%</li>
                                    </ul>
                                    
                                </td>
                            </tr>
                            <tr>
                                <td scope="row" className="infobox-left" >Main Export Partners</td>
                                <td className="infobox-right">
                                <ul className="infobox-list" style={{"list-style-type": "none"}}>
                                    <li><Link className="link-color-unique" href="/worlds/kaisarverse/equestrian-multi-union-empire"><span>Equestrian Multi-Union Empire</span></Link> 23.2%</li>
                                    <li><Link className="link-color-unique" href="/worlds/kaisarverse/mleocun"><span>Mleocun</span></Link> 17.6%</li>
                                    <li><Link className="link-color-unique" href="/worlds/kaisarverse/mleocun-equestria"><span>Mleocunese Equestria</span></Link> 12.1%</li>
                                    <li><Link className="link-color-unique" href="/worlds/kaisarverse/minelegotipony"><span>MineLegotipony</span></Link> 9.2%</li>
                                    <li><Link className="link-color-unique" href="/worlds/kaisarverse/harmony-hippogriffia"><span>Harmony-Hippogriffia</span></Link> 8.2%</li>
                                    <li><Link className="link-color-unique" href="/worlds/kaisarverse/calavaria"><span>Calavaria</span></Link> 6.5%</li>
                                    <li><Link className="link-color-unique" href="/worlds/kaisarverse/hyper-equestria"><span>Hyper Equestria</span></Link> 5.9%</li>
                                    <li><Link className="link-color-unique" href="/worlds/kaisarverse/royal-snowland"><span>Royal Snowland</span></Link> 3.1%</li>
                                    <li><Link className="link-color-unique" href="/worlds/kaisarverse/united-entente"><span>United Entente</span></Link> 2.5%</li>
                                    <li><Link className="link-color-unique" href="/worlds/kaisarverse/anarcho-equestria"><span>Anarcho Equestria</span></Link> 2.4%</li>
                                    <li>Other Nations 8.4%</li>
                                </ul> 
                                </td>
                            </tr>
                            <tr>
                            <td scope="row" className="infobox-left" >Imports</td>
                                <td className="infobox-right">
                                <span style={{"color": "Green"}}>▲</span> US$376.5 trillion   
                                </td>
                            </tr>
                            <tr>
                                <td scope="row" className="infobox-left" >Import Goods</td>
                                <td className="infobox-right">
                                <ul className="infobox-list" style={{"list-style-type": "none"}}>
                                        <li>Manufactured goods 20.5%</li>
                                        <li>Fuels and Mining 43.2%</li>
                                        <li>Agriculture Products 34.1%</li>
                                        <li>Others 2.2%</li>
                                </ul>    
                                </td>
                            </tr>
                            <tr>
                                <td scope="row" className="infobox-left" >Main Import Partners</td>
                                <td className="infobox-right">
                                <ul className="infobox-list" style={{"list-style-type": "none"}}>
                                    <li><Link className="link-color-unique" href="/worlds/kaisarverse/minelegotipony"><span>MineLegotipony</span></Link> 21.5%</li>
                                    <li><Link className="link-color-unique" href="/worlds/kaisarverse/united-entente"><span>United Entente</span></Link> 18.2%</li>
                                    <li><Link className="link-color-unique" href="/worlds/kaisarverse/mleocun"><span>Mleocun</span></Link> 11.3%</li>
                                    <li><Link className="link-color-unique" href="/worlds/kaisarverse/harmony-hippogriffia"><span>Harmony-Hippogriffia</span></Link> 8.2%</li>
                                    <li><Link className="link-color-unique" href="/worlds/kaisarverse/east-maconian"><span>East Maconian</span></Link> 7.9%</li>
                                    <li><Link className="link-color-unique" href="/worlds/kaisarverse/royal-snowland"><span>Royal Snowland</span></Link> 7.1%</li>
                                    <li><Link className="link-color-unique" href="/worlds/kaisarverse/equestrian-multi-union-empire"><span>Equestrian Multi-Union Empire</span></Link> 6.6%</li>                                    
                                    <li><Link className="link-color-unique" href="/worlds/kaisarverse/calavaria"><span>Calavaria</span></Link> 6.1%</li>
                                    <li><Link className="link-color-unique" href="/worlds/kaisarverse/mleocunese-equestria"><span>Mleocunese Equestria</span></Link> 4.5%</li>
                                    <li><Link className="link-color-unique" href="/worlds/kaisarverse/hyper-equestria"><span>Hyper Equestria</span></Link> 3.4%</li>
                                    <li>Other Nations 5.2%</li>
                                </ul> 
                                </td>
                            </tr>
                            <tr><th colspan="2" style={{"background":"lightblue", "textAlign": "center"}}>Public Finances</th></tr>
                            <tr>
                            <td scope="row" className="infobox-left" >Public Debt</td>
                                <td className="infobox-right">
                                <span style={{"color": "Red"}}>▲</span> 25.3% of GDP (Q4 2389 ALB)
                                </td>
                            </tr>
                            <tr>
                            <td scope="row" className="infobox-left" >Budget Balance</td>
                                <td className="infobox-right">
                                <span></span> -1.4% of GDP; US$ 572.4 billion (2389 ALB)
                                </td>
                            </tr>
                            <tr>
                            <td scope="row" className="infobox-left" >Revenues</td>
                                <td className="infobox-right"> 
                                <span style={{"color": "Green"}}>▲</span> US$ 556 trillion (2389 ALB)
                                </td>
                            </tr>
                            <tr>
                            <td scope="row" className="infobox-left" >Expenses</td>
                                <td className="infobox-right">
                                <span style={{"color": "Red"}}>▲</span> US$ 557 trillion (2389 ALB)
                                </td>
                            </tr>
                            <tr>
                            <td scope="row" className="infobox-left" >Credit Rating</td>
                                <td className="infobox-right">
                                Snowlandian Credit Rating Agency:
                                <ul className="infobox-list" style={{"list-style-type": "none"}}>
                                    <li><span style={{"color": "Blue"}}><strong>=</strong></span> A+ (Domestic Currency) </li>
                                    <li><span style={{"color": "Blue"}}><strong>=</strong></span> A+ (Foreign Currency) </li>
                                    <li><span style={{"color": "Blue"}}><strong>=</strong></span> A- (Bond) </li>
                                </ul>    
                                Eye & Staccato's:
                                <ul className="infobox-list" style={{"list-style-type": "none"}}>
                                    <li><span style={{"color": "Blue"}}><strong>=</strong></span> AAA (Domestic) </li>
                                    <li><span style={{"color": "Blue"}}><strong>=</strong></span> AA (Foreign) </li>
                                    <li><span style={{"color": "Blue"}}><strong>=</strong></span> AAA (T+C Assasseement) </li>
                                </ul>   
                                Twilight, Starlight, & Sunset Ltd:
                                <ul className="infobox-list" style={{"list-style-type": "none"}}>
                                    <li><span style={{"color": "Green"}}><strong>▲</strong></span> AAA (Local Currency) </li>
                                    <li><span style={{"color": "Blue"}}><strong>=</strong></span> AA (Foreign Currency) </li>
                                    <li><span style={{"color": "Blue"}}><strong>=</strong></span> AAA (Country Ceiling) </li>
                                    <li>Outlook: Stable</li>
                                </ul>   
                                </td>
                            </tr>
                            <tr>
                                <td scope="row" className="infobox-left" >Foreign Reserves</td>
                                <td className="infobox-right">
                                <span style={{"color": "Green"}}>▲</span> US$322.732 trillion (2389 ALB)
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="card-text mb-auto" style={{"text-align":"justify;"}}>
                        The Economy of MineLegotia and Equestria is the largest among the Commonwealth nations and is an highly developed/advanced social market economy. As an upper-income country and part of the CEOFTC (Commonwealthian Economic Organisation for Free Trade and Cooperation), the MineLegoEquestrian Economy is a mix between state-owned enterprises, domestic, and foreign companies. Estimated to be worth 3.195 Trillion Rupas in 2390 ALB, it is the largest economy in the Imperial Sphere.  22.2% of the GDP of MineLegotia and Equestria emerges from the state enterprises, with the remaining 77.7% comes from domestic and foreign businesses. The MineLegoEquestrian Economy is diversified among a host of sectors, mainly information technology, manufacturing, telecommunications, arms manufacturing, books, agricultural products, mining, retail, banking, e-commerce, and tourism. 
                    </p>
                    <br/>
                    <p className="card-text mb-auto" style={{"text-align":"justify;"}}>
                        Despite the recent 2301 Hyper Equestrian Finacial Crash which affected Commonwealth economies' foundation, the MineLegoEquestrian Economy has long since been back on track with a growth that has accelerated to over 2-3% growth in recent years. However, this has also led to the expansion of state-owned entreprises after mass accquisitions of private sector assets using various methods and have yet to relinquish a majority of these assets since. Since 2330, the growth rate has recovered and fluctated around 2%, with notable deviation in 2360 and 2380 where further trade deals were faciliated with foreign countries such as in the <Link className="link-color-unique" href="https://www.nationstates.net/region=confederation_of_corrupt_dictators">Confederation of Corrupt Dictators</Link>
                    </p>
                    <br/>
                    <p className="card-text mb-auto" style={{"text-align":"justify;"}}>
                        MineLegotia and Equestria has been noted to be one of the leading nations in the Commonwealth with the most billionaires and millionaires with the Commonwealth. In 2381 ALB, there are reportedly 57 Trillionaries, 1573 Billionaires, and 64.3 million millionaires. It ranks first among the Commonwealth for one of the highest rates of income and can be classified as an upper-income nation.
                    </p>
                    <br/>
                    <p className="card-text mb-auto" style={{"text-align":"justify;"}}>
                        The Empire has been ranked fourth in terms of ease of doing business out of the eleven commonwealth countries, which is notably by the prevalence of E-commerce, accounting for 20% of the Commonwealth’s market share. Additionally, with contionus expansion of state infrastructure, the Multiversal Empire has been acclaimed to be one of the best-connected countries.
                    </p>
                    <br/>
                    <p className="card-text mb-auto" style={{"text-align":"justify;"}}>
                        However, a notable concern to the Multiversal Empire's Economy is its tendency to avoid trading with foreign countries outside of their sphere of Commonwealth allies. Only 8.4% of MineLegoEquestrian exports go outside the Commonwealth, and only 5.2% of MineLegoEquestrian imports come from outside the Commonwealth. Thus leading to people commenting on MineLegoEquetrian Economics as "Mercantilism with a different name".
                    </p>
                </div>
            </div>
        </>
    );
}

export default KaisarverseEconomyContent;