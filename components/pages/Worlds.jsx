import React from "react";
import Link from 'next/link'

function Worlds() {
  return (
    <div className="container">
      <div className="col-lg">
        <div className="row g-0 border flex-md-column d-flex rounded overflow-hidden mb-4 shadow-sm h-md-250 position-relative world-cool-background">
          <div className="col p-4 d-flex flex-column position-static">
            <h1>Bureaucracy Manifest</h1>
            <p className="card-text mb-auto" style={{ "text-align": "justify" }}>
               To be a sapient in such times is to be one amongst uncatalogued trillions. To be in a state trying to assert its own ability to live up to its ideals yet struggling every step in trying to do so. To either live by ink or to be condemned to death by it. There is no such thing as a simple day in the Empire, for at the peak of civilization, the only enemy all must face is themselves and their ideals. 
            </p>
            <h5><Link href="/worlds/bureaucracymanifest" className="nav-link">Read More</Link></h5>
          </div>
        </div>  
        <div className="row g-0 border flex-md-column d-flex rounded overflow-hidden mb-4 shadow-sm h-md-250 position-relative world-cool-background">
          <div className="col p-4 d-flex flex-column position-static">
            <h1>Vigilants in Rekindled Embers</h1>
            <p className="card-text mb-auto" style={{ "text-align": "justify" }}>
                A Knight Order characterised by their adherence to duty and justice. An aspect from Rekindled Embers that I got obsessed over and continued to worldbuild with semi-canon elements. The Knights of the Order of the Vigilant are a group of knights who are sworn to protect the innocent, uphold justice, and the tenants of Saint Applejack - may or may not majorly be corrupt, insane, esoteric, and or unhelpfully bureaucratic. 
            </p>
            <h5><Link href="/worlds/inkbloods-main" className="nav-link">Read More</Link></h5>
          </div>
        </div>  
      </div>
    </div>
  );
}

export default Worlds;
