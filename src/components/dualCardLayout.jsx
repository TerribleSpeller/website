import React from "react";
import ContentCard from "./ContentCard.jsx";
import Homepagecontent from "./content/HomePageContent.js";

function createHomePageContent(content) {
  return (
    <ContentCard
      key={content.id}
      title={content.title}
      content={content.desc}
    />
  );
}
const DualCardLayout = (props) => {
  return (
    <div className="col p-4 d-flex flex-xl-row flex-column position-static dualcardlayout-css">
      {Homepagecontent.map(createHomePageContent)}
    </div>
  );
};

export default DualCardLayout;
