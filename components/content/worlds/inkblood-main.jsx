import React from "react";
import Link from 'next/link'
import { useState, useEffect } from "react";
import Papa from "papaparse";
import Image from 'next/image';

function inkbloodsMain() {
  const [data, setData] = useState([]);
  const [racist, setRacist] = useState(-2); // Default value for the racist filter
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const [targetItem, setTargetItem] = useState(null);
  useEffect(() => {
    fetch("/ocdata.csv") // Ensure `data.csv` is inside `public/`
      .then((response) => response.text())
      .then((csvText) => {
        const parsed = Papa.parse(csvText, { header: true });
        const filteredData = parsed.data.map((row) => ({
          Name: row["Name"],
          Age: row["Age"],
          BirthDate: row["BirthDate"],
          Gender: row["Gender"],
          Department: row["Department"],
          Rank: row["Rank"],
          PolAff: row["Political Affliation"],
          PolAffDetail: row["PolAffDetail"],
          Racist: row["Racist?"],
          Belief: row["Belief"],
          Personality: row["Personality / Politics"],
          Coordinates: [parseInt(row["Y"]), parseInt(row["Z"]), parseInt(row["X"])],
        }));
        setData(filteredData);
      });
  }, []);

  const chunkData = (array, size) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  };

  const chunkedData = chunkData(data, 5); // Split data into chunks of 5

  const filteredData = data.filter(
    (item) => item.Coordinates[2] === parseInt(racist)
  );

  const figureOutColour = (item) => {
    if (item.PolAff === "Liberal") {
      return "viggie-green";
    } else if (item.PolAff === "Radical") {
      return "viggie-red"
    } else if (item.PolAff === "Modernist") {
      return "viggie-grey"
    } else if (item.PolAff === "Purist") {
      return "viggie-orange"
    } else if (item.PolAff === "Bureaucrat") {
      return "viggie-Bureaucrat"
    }
  }

  const handleCardClick = (item) => {
    if (item !== targetItem) {
      setTargetItem(item);
      if (isInfoVisible === false) {
        setIsInfoVisible(true);
      }
    } else {
      setIsInfoVisible(!isInfoVisible);
      setTargetItem(item);
    }

  }



  return (
    <div className="container">
      <div className="col-lg">
        <div className="">
          <h1><u>The Vigilant Order</u></h1>
          <p>
            In the story <Link href="https://www.fimfiction.net/story/467562/rekindled-embers" className="nav-link link-module">Rekindled Embers</Link>, the world of Equestria is ruled by five Knight Orders - the Knights Adamant, the Knights Mystic, the Knights Radiant, the Knights Jubilant, and the Knights Vigilant. Out of five of them, the least relevant in terms of the plot were the Knights Jubilant and Knights Vigilant.
          </p>
        </div>
        <div>
          <h2>Vigilants</h2>
          <div className="row mb-2">
            <div className="d-flex justify-content-center align-items-center col-6">
              <label className="me-3 col-2">
                Racism Selecter
              </label>
              <select className="form-select mx-2" aria-label="Default select example" value={racist} onChange={(e) => setRacist(e.target.value)}>
                <option disabled>Pick a Racism Level</option>
                <option value="-2">Not Racist</option>
                <option value="-1">Not that Racist</option>
                <option value="0">Mildly Racist</option>
                <option value="1">Racister</option>
                <option value="2">Gamer</option>
              </select>
            </div>


          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div className="container justify-content-center align-items-center">
              <div className="coordinate-grid mx-auto">
                {filteredData.map((item, index) => {
                  const [x, y] = item.Coordinates; // Use x and y for grid placement
                  return (
                    <div
                      key={index}
                      className="coordinate-item"
                      style={{
                        gridColumn: x + 3,
                        gridRow: 3 - y,
                      }}
                    >
                      <div className={`card-custom ${figureOutColour(item)}`} onClick={() => handleCardClick(item)}>
                        <div className="card-content"  onClick={() => handleCardClick(item)}> 
                          <div className="text-content"  onClick={() => handleCardClick(item)}>
                            <h6>{item.Name}</h6>
                            <strong>{item.PolAff}</strong>
                            {/* <p>{item.PolAffDetail}</p> */}
                          </div>
                          <div className="image-content"  onClick={() => handleCardClick(item)}>
                            <Image
                              src={`/images/ponyTowns/viggies/${item.Name}.png`}
                              width={100}
                              height={100}
                              alt={item.Name}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={`center-of-page rounded-3 justify-content-center align-items-center border border-3  ${isInfoVisible ? "showable" : "hideable"}  ${targetItem ? figureOutColour(targetItem) : null} `}  onClick={() => setIsInfoVisible(!isInfoVisible)}>
              <div className="container m-1 p-2">
                {targetItem && (
                  <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-7">
                      <h6>{targetItem.Name} ({targetItem.Gender === "Male" ? "M" : "F"})</h6>
                      <p><strong>Age:</strong> {targetItem.Age} (Born: {targetItem.BirthDate})</p>
                      <p><strong>Rank:</strong> {targetItem.Rank}</p>
                      <p><strong>Pol. Affliation:</strong> {targetItem.PolAff}</p>
                      <p><strong>Ideology:</strong> {targetItem.PolAffDetail}</p>
                      <p><strong>Personality:</strong></p>
                      <p> {targetItem.Personality}</p>

                    </div>
                    <div className="col-5">
                      <Image
                        src={`/images/ponyTowns/viggies/allPonesStd256x256/${targetItem.Name}.png`}
                        width={256}
                        height={256}
                        alt={targetItem.Name}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default inkbloodsMain;