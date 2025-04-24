import React from "react";
import Link from 'next/link'
import { useState, useEffect } from "react";
import Papa from "papaparse";
import Image from 'next/image';

function inkbloodsMain() {
  const [data, setData] = useState([]);
  const [racist, setRacist] = useState(-2); // Default value for the racist filter
  useEffect(() => {
    fetch("/ocdata.csv") // Ensure `data.csv` is inside `public/`
      .then((response) => response.text())
      .then((csvText) => {
        const parsed = Papa.parse(csvText, { header: true });
        const filteredData = parsed.data.map((row) => ({
          Name: row["Name"],
          Age: row["Age"],
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
            <div className="container">
              {/* {chunkedData.map((chunk, chunkIndex) => (
                <div className="row mb-3 justify-content-center" key={chunkIndex}>
                  {chunk.map((row, index) => (
                    <div key={index} className="col-md-2 col-12 p-1 d-flex">
                      <div className="card p-2 h-100 d-flex flex-column justify-content-center align-items-center">
                        <div className="row g-0 align-items-center w-300">
                          <div className="col-6">
                            <table className="">
                              <tr>
                                <td valign="top"><h6 className="card-title">{row.Name}</h6></td>
                              </tr>
                              <tr>
                                <td valign="top" className=""><strong>{row.PolAff}</strong></td>
                              </tr>
                              <tr>
                                <td valign="top" className="">{row.PolAffDetail}</td>
                              </tr>
                            </table>
                          </div>
                          <div className="col-6  align-items-center">
                            <Image
                              className="mx-auto"
                              src={"/images/ponyTowns/viggies/" + row.Name + ".png"}
                              width={128}
                              height={128}
                              alt="Cool Avatar I swear"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))} */}
              <div className="coordinate-grid">
                {filteredData.map((item, index) => {
                  const [x, y] = item.Coordinates; // Use x and y for grid placement
                  return (
                    <div
                      key={index}
                      className="coordinate-item"
                      style={{
                        gridColumn: x + 3, // Adjust for grid alignment
                        gridRow: 3 - y ,    // Adjust for grid alignment
                      }}
                    >
                      <div className="card-custom">
                        <h6>{item.Name} ({x}, {y})</h6>
                        <strong>{item.PolAff}</strong>
                        <p>{item.PolAffDetail}</p>
                        <Image
                          src={`/images/ponyTowns/viggies/${item.Name}.png`}
                          width={128}
                          height={128}
                          alt={item.Name}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default inkbloodsMain;