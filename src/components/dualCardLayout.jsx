import React from "react";
import ContentCard from "./ContentCard.jsx";
const DualCardLayout = () => {
  return (
    <div className="col p-4 d-flex flex-lg-row flex-md-column position-static dualcardlayout-css">
      <ContentCard />
      <ContentCard />
    </div>
  );
};

export default DualCardLayout;
