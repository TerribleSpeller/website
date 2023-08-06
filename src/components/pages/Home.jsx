import React from "react";
import Dipimg from "../../img/DIP.png";
import DualCardLayout from "../dualCardLayout.jsx";

const Home = () => {
  return (
    <div className="container">
      <div className="Row">
        <div className="col-lg">
          <div className="row g-0 border flex-md-column d-flex rounded overflow-hidden mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static front-page-landing">
              <div className="d-flex flex-row">
                <div
                  className="mx-auto"
                  style={{
                    "flex-grow": "1",
                    "align-items": "center",
                    display: "flex",
                  }}
                >
                  <img
                    className="img-circle mx-auto"
                    src={Dipimg}
                    alt="Cool Avatar I swear"
                    style={{}}
                  />
                </div>

                <div className="my-auto" style={{ "flex-grow": "1" }}>
                  <h1>Welcome To My Website!</h1>
                </div>
              </div>
              <hr className="border border-white" />
              <p
                className="card-text mb-auto"
                style={{ "text-align": "justify" }}
              >
                Nice to meet you, I'm TerribleSpeller, sometimes
                TerribahSphlear. Welcome to my website! This website serves as
                an online portfolio and introduction to me, my projects, and my
                various idiosyncrasies for all those unintiated. Plus, it saves
                time on introductions. It also allows me to get good at web
                developing so that I can actually properly develop my actual IRL
                personal site along with giving me practice in such so that I
                can possibly gain employment from it.
              </p>
            </div>
          </div>
          <DualCardLayout />
        </div>
      </div>
    </div>
  );
};

export default Home;
