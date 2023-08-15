import React from "react";
import Link from 'next/link';

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
                                    <td scope="row"className="infobox-left"  >Currency</td>
                                    <td  className="infobox-right"><span className="infobox-right">Rupas (IBC, Rs) (1$ = 1.5 Rupas)</span></td>
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