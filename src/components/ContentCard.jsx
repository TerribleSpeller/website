import React from "react";

function ContentCard(props) {
  return (
    <div className="d-flex rounded border card-stuff mx-3">
      <div className="card-stuff-top mx-auto ">
        <div className="mx-3">
          <h3 
            className="mt-2"
            style={{ top: "50%", left: "50%", "textAlign": "center" }}
          >
            {props.title}
          </h3>
        </div>
        <div className="mb-2 card-stuff-bottom p-3">{props.content}</div>
      </div>
      <div className="card-stuff-bottom"></div>
    </div>
  );
}

export default ContentCard;
