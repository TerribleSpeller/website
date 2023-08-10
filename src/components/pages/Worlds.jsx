import React from "react";
import { NavLink } from "react-router-dom";

function Worlds() {
  return (
    <div className="container">
      <div className="col-lg">
        <div className="row g-0 border flex-md-column d-flex rounded overflow-hidden mb-4 shadow-sm h-md-250 position-relative world-cool-background">
          <div className="col p-4 d-flex flex-column position-static">
            <h1>Kaisarverse</h1>
            <p className="card-text mb-auto" style={{ "text-align": "justify" }}>
               To be a sapient in such times is to be one amongst uncatalogued trillions. To be in a state trying to assert its own ability to live up to its ideals yet struggling every step in trying to do so. To either live by ink or to be condemned to death by it. There is no such thing as a simple day in the Empire, for at the peak of civilization, the only enemy all must face is themselves and their ideals. 
            </p>
            <NavLink to="/website/worlds/kaisarverse" className="nav-link">Read More</NavLink>
          </div>
        </div>  
        <div className="row g-0 border flex-md-column d-flex rounded overflow-hidden mb-4 shadow-sm h-md-250 position-relative world-cool-background">
          <div className="col p-4 d-flex flex-column position-static">
            <h1>Inkbloods in Rekindled Embers</h1>
            <p className="card-text mb-auto" style={{ "text-align": "justify" }}>
                A xenotype of ponies modified by a family lineage of Bureaucrats, Administrators, Accountants, and Lawyers - the Inkbloods are a unique mutation of the pony genome in the universe. Made and modified for the task of the boring issues of bureaucracy and governance. They are present and seek to change the nation for their own aims... but who are they? Why are they? And why do they keep ending up in polyamories?       
            </p>
            <NavLink to="/website/worlds/inkbloods" className="nav-link">Read More</NavLink>
          </div>
        </div>  
      </div>
    </div>
  );
}

export default Worlds;
