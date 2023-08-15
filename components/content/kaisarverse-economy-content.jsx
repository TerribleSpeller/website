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
                            Despite the recent 2301 Hyper Equestrian Finacial Crash which affected Commonwealth economies' foundation, the MineLegoEquestrian Economy has long since been back on track with a growth that has accelerated to over 2-3% growth in recent years. However, this has also led to the expansion of state-owned entreprises after mass accquisitions of private sector assets using various methods and have yet to relinquish a majority of these assets since. Since 2330, the growth rate has recovered and fluctated around 2%, with notable deviation in 2360 and 2380 where further trade deals were faciliated with foreign countries such as in the <Link className="link-color-unique" href="https://www.nationstates.net/region=confederation_of_corrupt_dictators"><span>Confederation of Corrupt Dictators</span></Link>
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
                            However, a notable concern to the Multiversal Empire's Economy is its tendency to avoid trading with foreign countries outside of their sphere of Commonwealth allies. Only 8.4% of MineLegoEquestrian exports go outside the Commonwealth, and only 5.2% of MineLegoEquestrian imports come from outside the Commonwealth. Thus leading to people commenting on MineLegoEquetrian Economics as "Mercantilism with Interdimensional Characteristics".
                        </p>
                        <br/>
                    <div id="sectors">
                        <h3>Sectors</h3>
                        <hr/>   
                        <h4 className="d-inline-block mb-2">Agriculture</h4>
                        <p className="card-text mb-auto" style={{"text-align":"justify;"}}>
                            Agriculture is a sector that holds a decent sway of the GDP of the nation. With 8.7% of the GDP being handled by it alone. Currently only 13% of the land area is being used for agriculture and employs about 1.3 billion workers. Primary agricultural commodities produced by the industry include rice, wheat, peanuts, poultry, eggs, mushrooms, and pineapples. Plantations are contionusly expanding in the country and are expected to expand by another 3% (2.1 million hectares) by 2395 ALB. 
                        </p>
                        <br/>
                        <p className="card-text mb-auto" style={{"text-align":"justify;"}}>
                            Despite recent investments into the sector, the Agricultural workforce is expected to shrink by 5% with a deviation of 1.5% by 2395 ALB due to increasing advancement in the field of robotics. As such, agricultural yields have been forecasted to improve by 3.7% by the Ministry of Agriculture due to the exodus of experienced farmers by the automation of their jobs negatively impacting the expected growth rate. 
                        </p>
                        <br/>
                        <h4 className="d-inline-block mb-2">Bureaucracy</h4>
                        <p className="card-text mb-auto" style={{"text-align":"justify;"}}>
                            The Bureaucratic Sector holds about 19.5% of the GDP, accounting for 37.7% of all service jobs. Due to the excellent reputation held by the nation in the industry of bureaucratic and management, the sector is expect to grow by 3.4% in 2390 ALB. 1.625 Billion MineLegoEquestrians currently work as bureaucrats within the nation, continuing to contribute to economic growth by taking all the idiotic and mindnumbing jobs any foreign corporation or government does not want to do. Due to the dominance and social status that comes from working as a 'Inkman', the bureaucracy has expected to expand by 3.6% by 2391 ALB as acacording to one Ministry of Workers' Matters report in 2389 ALB. 
                        </p>
                        <br/>
                        <p className="card-text mb-auto" style={{"text-align":"justify;"}}>
                            A Ministry of Commonwealth Affairs report in 2388 ALB reported that approximately 573.49 Billion Rupas worth of bureaucratic services have been done between the Empire and its C7, with another 103.53 Billion coming from other states within the rest of the Commonwealth. 
                        </p>
                        <br/>
                        <h4 className="d-inline-block mb-2">Manufacturing</h4>
                        <p className="card-text mb-auto" style={{"text-align":"justify;"}}>
                            The Manufacturing Sector holds about 41.6% of the GDP along with 22.1% of the workforce. Compared to the Manufacturing booms of 1430s and 2100s, the current size of the Imperial Manufacturing Sector is a modest one. The majority of producers in this field consist of medium-sized to large size entreprises, with the sector having noted a 4.3% growth YoY since 2380 ALB. Despite such modest increases, the Manufacturing Sector has fluctated and stayed around its regular mark of holding 40% to 50% of the Imperial GDP. Economists tie this to the fact that Imperial Manufacturing has always been locked in with manufacturing high value goods with lower value goods slowly being outsourced, with the outsourcing and insourcing occuring at near identical rates, makign it impossible for the Manufacturing Sector to gain a majority in the GDP and increase its workforce by a large margin. 
                        </p>
                        <br/>
                        <p className="card-text mb-auto" style={{"text-align":"justify;"}}>
                            The Manufacturing Sector as expected to continue by challenged by the MineLegotiponyian Manufacturing Sector, high costs, and increasing overreach from the Ministry of Industry and Union Regulatory bodies. 
                        </p>
                        <br/>
                        <h4 className="d-inline-block mb-2">Services</h4>
                        <p className="card-text mb-auto" style={{"text-align":"justify;"}}>
                            The Services Sector holds about 51.7% of the GDP along with 41.3% of the workforce. The Services sector is a diverse portofolio, with major sectors being the entertainment, digital services, and financial services. The sector as a whole is expected to stagnate with a growth of 1.6% within the next decade. Forecasts have been heavily impacted by the recent losses of PT. Tailspin Entreprises, Animators' Strike, and subsequent breakup by the Ministry of Industry. Meanwhile, the digital services industry is expected to increase by 4.4% with the recent expansion of the digital art and web services industries.  
                        </p>
                        <br/>
                        <p className="card-text mb-auto" style={{"text-align":"justify;"}}>
                            Small businesses account for 49% of all the Service sector, and is expected to expand as further programs to increase internet connection across the Commonwealth continues on. The Lincar-Sparkle Equation states that Imperial Service jobs will continue expanding relative to the improvement of connectivity across the Empire, and recent reports by the Ministry of Industry, Ministry of Trade, and Ministry of Commonwealth Matters seem to back up this equation with expectations for small businesses to increase and account for roughly 53% of the sector by 2395 ALB. 
                        </p>
                        <br/>
                        <p className="card-text mb-auto" style={{"text-align":"justify;"}}>
                            Small Businesses within the Empire have also been continuing their 'Small Conglomerate' trend, with the businesses within similar services to engage in forming vertical conglomerates to prove a fighting chance against larger corporations. This lowers costs between various small businesses, and maximizing profit among them and has proven strong enough to compete with foreign and domestic corporations. 
                        </p>
                    </div>
                    <div id="labour">
                        <br/>
                        <h3>Labour</h3>
                        <hr/>   
                        <p className="card-text mb-auto" style={{"text-align":"justify;"}}>
                            Due to the various species inhabiting MineLegotia and Equestria, labour is a more complex topic than expected in other countries. With certain sectors requiring certain species in order to function properly. Like the naval tourism sector which is often staffed by Hippogriffs and unicorns, with a variety of extensive regulations to ensure safety. But these sectors are slowly being eliminated as industrialization finally catches up to the various sectors. Allowing more species to have a hand in the sectors and allowing further growth. 
                        </p>
                        <br/>
                        <p className="card-text mb-auto" style={{"text-align":"justify;"}}>
                            Job security in the Multiversal Empire has been notorious for its backing from the various Unions spread across the nation. The most famous or infamous out of all of them is the All-Empire Bureaucrat Union (AEBU), arguably the most powerful union, which are often commented on to be equivalent to the bureaucracy itself ensuring that most Bureaucrat jobs are held on to. Despite such reputation, Unions serve an important role in ensuring worker safety and also ensuring that mass layoffs do not occur in which living standards may be negatively affected significantly. The trend of continued Unionisation is fully supported by the Ministry of Workers' Matters. 
                        </p>
                        <br/>
                        <p className="card-text mb-auto" style={{"text-align":"justify;"}}>
                            As all Commonwealth States, the labour force is expected to continue growing at its expected rate of 3.5% due to the steady growth of the population of the Empire and immigrants entering from various other Commonwealth states. Due to a highly educated population, the Empire has increased regulations on high-skilled labour whilst low-skill labour remains lenient. This is due to recent predictions that the Imperial Economy may begin outpacing the growth of the labour force by 2392 ALB. If Economic growth continues to stay at this rate, it is expected that a gap of at least 100 million workers may appear by 2400 ALB, requiring a larger influx of workers from aboard and the Commmonwealth States to fulfill such a gap. Programs have been implemented Ministry of Public Works and Housing and the Ministry of Industry to try and prepare and prevent such an issue, but the recent 'New Lands' program have only attracted roughly 10,000 high-skilled workers compared to the planned 100,000. 
                        </p>
                        <br/>
                    </div>
                    <div id="trade relations">
                        <h3>Trade Relations</h3>
                        <hr/>
                        <p className="card-text mb-auto" style={{"text-align":"justify;"}}>
                            The majority of MineLegoEquestrian exports consist largely of manufactured goods, and industrial supplies. This ranges from machinery to high tech goods, to semiconductors. A vast majority of MineLegoEquestrian imports consists of agricultural products, capital goods, and automobiles. The rapidly expanding MineLegoEquestrian population had outpaced the domestic agricultural industry, thus requiring it to import from various locations within the Empire. To increase exports, the Empire has been looking into opening ties with various other nations outside the Empire. With notable trade ties with the nation of <Link className="link-color-unique" href="https://www.nationstates.net/nation=salcanceacy"><span>Salcanceacy</span></Link> and several others on <Link className="link-color-unique" href="https://www.nationstates.net/page=dispatch/id=1598421"><span>Avaris</span></Link>. Recent diplomatic efforts have led to a growing market within the <Link className="link-color-unique" href="https://www.nationstates.net/region=confederation_of_corrupt_dictators"><span>Confederation of Corrupt Dictators</span></Link>. Vice versa, MineLegotia and Equestria has also begun importing from these various sources in order to makeup for the fact that demand is outpacing supply within the Empire's sphere of influence.
                        </p>
                        <br/>
                    </div>
                    <div id="business-culture">
                        <h3>Business Culture </h3>
                        <hr/>
                        <p className="card-text mb-auto" style={{"text-align":"justify;"}}>
                            The culture of "Überanpassun" or "overfitting" inherent in the Imperial Economy is a phenomeonon which was inherited from Changeling Corporations after the <Link className="link-color-unique" href="/worlds/kaisarverse/history/gmv"><span>The Great Multiversal War</span></Link> in which personnel trained in a field are further trained by the corporation to be suited in certain tasks the corporation requires. Due to ever growing complexity of the economy, this culture has further been increased to the point where personnel can be held on and working for the same company and be specilised to the point where only within their corporation do their jobs exist. According to  <Link className="link-color-unique" href="/worlds/kaisarverse/misc/corpos/lintse"><span>Lintse</span></Link>, approximately 5.6% of all jobs are considered as 'extreme Uberanpassun' and roughly 14.5% as 'normal Ubperanssun'. This nature of overspecialisation has resulted in massive unemployment whenever corporations that have engaged in such overspecialisation collapse or go bankrupt. 
                        </p>
                        <br/>
                        <p className="card-text mb-auto" style={{"text-align":"justify;"}}>
                            "Zhenfuayah" or literally 'Government Daddy', is a degratory term assigned to companies accquired by State Owned Entreprises or the Government itself after undergoing debt restructing and bailouts. Relating to the fact that the government swooping in and 'saving' these companies, many state that the government's their father for such overprotective behaviour instead of simply letting the corporation go bankrupt and be put up to auction. Often than not, being seen working with such companies is often a stain on other companies social standing, as it is seen to be as impromper to be working with companies that had potential to collapse into bankruptcy. This also relates to the term of 'Jiujiuxe', or 'Saved to be Killed', which is also attached to such companies as due to this culture, companies are often unable to start anew and are thus auctioned off by the government.
                        </p>
                        <br/>
                    </div>
                    <div id="biggest-compnaies">
                        <h3>Largest Companies</h3>
                        <hr/>
                        <table>
                            <caption className="infobox-title">Largest Companies of <span >MineLegotia and Equestria</span></caption>
                            <thead>
                                <tr>
                                    <td scope="row"className="compare-table-top td-dumb-add-border">Company Name</td>
                                    <td scope="row"className="compare-table-top td-dumb-add-border">Headquarters</td>
                                    <td scope="row"className="compare-table-top td-dumb-add-border">Revenue (Billion / Bits)</td>
                                    <td scope="row"className="compare-table-top td-dumb-add-border">Market Capitalization  (Billion / Bits)</td>
                                    <td scope="row"className="compare-table-top td-dumb-add-border" style={{"width": "15"}}>Industry</td>
                                    <td scope="row"className="compare-table-top td-dumb-add-border">Ownership</td>
                                </tr>
                            </thead>
                            <tbody className="compare-table-body">
                                <tr>
                                    <td className="td-dumb-add-border">Royal Industries</td>
                                    <td className="td-dumb-add-border">MineLegotian Canterlot</td>
                                    <td className="td-dumb-add-border">658.35</td>
                                    <td className="td-dumb-add-border">1347.58</td>
                                    <td className="td-dumb-add-border">Manufacturing</td>
                                    <td className="td-dumb-add-border">Public/State-Owned</td>
                                </tr>
                                <tr>
                                    <td className="td-dumb-add-border">Melvin</td>
                                <td className="td-dumb-add-border">Manehatten</td>
                                <td className="td-dumb-add-border">587.42</td>
                                <td className="td-dumb-add-border">1242.98</td>
                                <td className="td-dumb-add-border">E-Commerce</td>
                                <td className="td-dumb-add-border">Public</td></tr>
                                <tr><td className="td-dumb-add-border">Royal Arms</td>
                                <td className="td-dumb-add-border">Xiahe</td>
                                <td className="td-dumb-add-border">276.48</td>
                                <td className="td-dumb-add-border">1032.56</td>
                                <td className="td-dumb-add-border">Arms Manufacturing</td>
                                <td className="td-dumb-add-border">Public / State Owned</td></tr>
                                <tr><td className="td-dumb-add-border">Pear Technologies</td>
                                <td className="td-dumb-add-border">Las Pegasus</td>
                                <td className="td-dumb-add-border">154.32</td>
                                <td className="td-dumb-add-border">904.32</td>
                                <td className="td-dumb-add-border">Technology</td>
                                <td className="td-dumb-add-border">Public</td></tr>
                                <tr><td className="td-dumb-add-border">Third Mercantile Bank</td>
                                <td className="td-dumb-add-border">Crystal City </td>
                                <td className="td-dumb-add-border">194.28</td>
                                <td className="td-dumb-add-border">894.38</td>
                                <td className="td-dumb-add-border">Banking</td>
                                <td className="td-dumb-add-border">Public</td></tr>
                                <tr><td className="td-dumb-add-border">Twilight, Starlight, & Sunset Ltd.</td>
                                <td className="td-dumb-add-border">Ponyville</td>
                                <td className="td-dumb-add-border">375.38</td>
                                <td className="td-dumb-add-border">863.68</td>
                                <td className="td-dumb-add-border">E-Commerce / Manfacutring</td>
                                <td className="td-dumb-add-border">Public</td></tr>
                                <tr><td className="td-dumb-add-border">Apple-Pear Conglomerate</td>
                                <td className="td-dumb-add-border">Applelousa</td>
                                <td className="td-dumb-add-border">294.58</td>
                                <td className="td-dumb-add-border">780.68</td>
                                <td className="td-dumb-add-border">Agriculture / Manufacturing</td>
                                <td className="td-dumb-add-border">Public</td></tr>
                                <tr><td className="td-dumb-add-border">Pratama Bank</td>
                                <td className="td-dumb-add-border">Manehatten</td>
                                <td className="td-dumb-add-border">183.57</td>
                                <td className="td-dumb-add-border">757.48</td>
                                <td className="td-dumb-add-border">Banking</td>
                                <td className="td-dumb-add-border">Public</td></tr>
                                <tr><td className="td-dumb-add-border">Lee’s Oils</td>
                                <td className="td-dumb-add-border">Sunset</td>
                                <td className="td-dumb-add-border">432.48</td>
                                <td className="td-dumb-add-border">653.29</td>
                                <td className="td-dumb-add-border">Petrochemicals and Oil</td>
                                <td className="td-dumb-add-border">Public</td></tr>
                                <tr><td className="td-dumb-add-border">Kirin Beer</td>
                                <td className="td-dumb-add-border">Xiahe</td>
                                <td className="td-dumb-add-border">84.37</td>
                                <td className="td-dumb-add-border">643.83</td>
                                <td className="td-dumb-add-border">Beverages</td>
                                <td className="td-dumb-add-border">Public</td></tr>
                                <tr><td className="td-dumb-add-border">Tailspin Entreprises</td>
                                <td className="td-dumb-add-border">Manehatten</td>
                                <td className="td-dumb-add-border">57.47</td>
                                <td className="td-dumb-add-border">638.48</td>
                                <td className="td-dumb-add-border">Entertainment</td>
                                <td className="td-dumb-add-border">Public</td></tr>
                                <tr><td className="td-dumb-add-border">Cirebon Motor</td>
                                <td className="td-dumb-add-border">Cirebon</td>
                                <td className="td-dumb-add-border">95.92</td>
                                <td className="td-dumb-add-border">483.58</td>
                                <td className="td-dumb-add-border">Automobile</td>
                                <td className="td-dumb-add-border">Public</td></tr>
                                <tr><td className="td-dumb-add-border">Trans-Commonwealth Marketplace</td>
                                <td className="td-dumb-add-border">Crystal City </td>
                                <td className="td-dumb-add-border">443.58</td>
                                <td className="td-dumb-add-border">432.57</td>
                                <td className="td-dumb-add-border">E-Commerce</td>
                                <td className="td-dumb-add-border">Public</td></tr>
                                <tr><td className="td-dumb-add-border">Celestial Technology</td>
                                <td className="td-dumb-add-border">Manehatten</td>
                                <td className="td-dumb-add-border">143.38</td>
                                <td className="td-dumb-add-border">405.38</td>
                                <td className="td-dumb-add-border">Technology</td>
                                <td className="td-dumb-add-border">Public/State Owned</td></tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default KaisarverseEconomyContent;