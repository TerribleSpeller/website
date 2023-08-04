import React from 'react';
import ContentCard from "./ContentCard.jsx" 
const DualCardLayout = () => {
    return(
        <div className="col p-4 d-flex flex-row position-static">
                <ContentCard />
                <ContentCard />
        </div>
    );
}

export default DualCardLayout;