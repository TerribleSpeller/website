import React from 'react';
import contentCard from "./ContentCard.jsx" 
const dualCardLayout = () => {
    return(
        <div className="col p-4 d-flex flex-column position-static front-page-landing">
            <div className="row flex-row d-flex">
                <contentCard />
                <contentCard />
            </div>
        </div>
    );
}

export default dualCardLayout;