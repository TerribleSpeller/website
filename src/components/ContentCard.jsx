import React from "react";

const ContentCard = () => {
  return (
    <div className="d-flex rounded border card-stuff mx-auto">
      <div className="card-stuff-top mx-auto ">
        <div className="mx-3">
          <h3 className="mt-2" style={{ top: "50%", left: "50%", "text-align": "center" }}>
            Hello World! Test
          </h3>
        </div>
      </div>
      <div className="card-stuff-bottom"></div>
    </div>
  );
};

export default ContentCard;
