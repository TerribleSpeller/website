import React from "react";
import { NavLink } from "react-router-dom";
import KaisarverseMainContent from "../content/kaisarverse-main-content"
import "../../styles.css";


const KaisarverseMain = () => {
    return(
        <div className="container">
            <div className="col-lg" id="kaisarverse-content">
                <div className="row g-0 border flex-md-column d-flex rounded overflow-hidden mb-4 shadow-sm h-md-250 position-relative world-cool-background overflow-yes" id="kaisarverse-page">
                    <KaisarverseMainContent />
                </div>
            </div>
        </div>
    );
}

export default KaisarverseMain;