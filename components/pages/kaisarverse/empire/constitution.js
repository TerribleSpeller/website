import React from "react";
import KaisarverseConstitutionContent from "../../../content/kaisarverse-constitution-content"


const ConstitutionContent = () => {
    return(
        <div className="container">
            <div className="col-lg" id="kaisarverse-content">
                <div className="row g-0 border flex-md-column d-flex rounded overflow-hidden mb-4 shadow-sm h-md-250 position-relative world-cool-background overflow-yes" id="kaisarverse-page">
                    <KaisarverseConstitutionContent />
                </div>
            </div>
        </div>
    );
}
//TODO: Demographics
export default ConstitutionContent;