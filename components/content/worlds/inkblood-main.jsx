import React from "react";
import Link from 'next/link'
import { useState, useEffect } from "react";
import Papa from "papaparse";
import Image from 'next/image';

function inkbloodsMain() {
  const [data, setData] = useState([]);
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
          PolAffDetail: row["Pol. Aff."],
          Racist: row["Racist?"],
          Belief: row["Belief"],
          Personality: row["Personality / Politics"],
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
          <div className="d-flex justify-content-center align-items-center"> {/* Centers content relative to the page */}
            <div className="container">
              {chunkedData.map((chunk, chunkIndex) => (
                <div className="row mb-3 justify-content-center" key={chunkIndex}> {/* Centers each row horizontally */}
                  {chunk.map((row, index) => (
                    <div key={index} className="col-md-2 p-1 d-flex"> {/* Ensures cards are evenly spaced */}
                      <div className="card p-2 h-100 d-flex flex-column justify-content-center align-items-center"> {/* Centers content inside the card */}
                        <div className="row g-0 align-items-center w-200"> {/* Ensures proper alignment */}
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default inkbloodsMain;