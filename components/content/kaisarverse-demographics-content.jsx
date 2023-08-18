import React from "react";
import Link from 'next/link';
import Demgfx from '../../public/images/Demographics20.png'
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
                                    <td className="infobox-right"><span className="infobox-right">2.3% (2389 Est)</span></td>
                                </tr>
                            </tbody>
                    </table>
                        <p className="card-text mb-auto" style={{"text-align":"justify;"}}>
                            kek
                        </p>
                        <br/>
                </div>
            </div>
        </>
    );
}

export default KaisarverseDemographicsContent;