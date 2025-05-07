import React from "react";
import Link from 'next/link'
import { useState, useEffect } from "react";
import Papa from "papaparse";
import Image from 'next/image';
import ChartFormat from '../../../chartjs-config.js';


export default function Viggiechart() {
    const [data, setData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("PolAff"); // Default category
    const [chartData, setChartData] = useState({});

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

    const PolAffColours = {
        'Liberal': 'rgb(182, 215, 168)', // #b6d7a8
        'Radical': 'rgb(234, 153, 153)', // #ea9999
        'Modernist': 'rgb(136, 136, 136)', // #888888
        'Purist': 'rgb(255, 130, 0)', // #ff8200
        'Bureaucrat': 'rgb(255, 255, 255)', // #ffcd56
    };

    const beliefColours = {
        'Discordant': 'rgb(255, 218, 116)',
        'Discordant-Leaning': 'rgb(221, 198, 135)', // #e8b787
        'Diarchist': ' rgb(179,151,181)', // #c9c9c9
        'Diarchist-Leaning': 'rgb(230,207,242)', // #7ebeea
        'Schizophrenic': 'rgb(84, 147, 241)', // #ff8200
    }



    useEffect(() => {
        if (data.length > 0) {
            const categoryCounts = data.reduce((acc, item) => {
                let key;
                if (selectedCategory === "Age") {
                    const age = parseInt(item.Age, 10);
                    if (age >= 0 && age <= 18) key = "0-18";
                    else if (age >= 19 && age <= 30) key = "19-30";
                    else if (age >= 31 && age <= 40) key = "31-40";
                    else if (age >= 41 && age <= 50) key = "41-50";

                    else if (age > 50) key = "51+";
                    else key = "Unknown";
                } else {
                    key = item[selectedCategory] || "Unknown";
                }
                acc[key] = (acc[key] || 0) + 1;
                return acc;
            }, {});


            const getCategoryColors = (category) => {
                switch (category) {
                    case "PolAff":
                        return Object.keys(categoryCounts).map((key) => PolAffColours[key] || 'rgba(108,117,125, 0.2)');
                    case "Gender":
                        return ["rgb(126, 190, 234)", "rgb(255, 155, 176)"];
                    case "Belief":
                        return Object.keys(categoryCounts).map((key) => beliefColours[key] || 'rgba(108,117,125, 0.2)');
                    case "Age":
                        return ["rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(54, 162, 235)", "rgb(255, 99, 132)"]; // Colors for age brackets
                    default:
                        return Object.keys(categoryCounts).map(() => 'rgba(108,117,125, 0.2)'); // Default neutral color
                }
            };

            setChartData({
                labels: Object.keys(categoryCounts),
                datasets: [
                    {
                        data: Object.values(categoryCounts),
                        backgroundColor: getCategoryColors(selectedCategory),
                    },
                ],
            });
        }
    }, [data, selectedCategory]);

    return (
        <div className="container mt-3">
            <h2>Vigilant Demographics</h2>
            <div className="row d-flex justify-content-center mb-3 align-items-center">
                <div className="mb-3 col-md-2 justify-content-center align-items-center">
                    <label htmlFor="categorySelect" className="form-label">
                        Select Category:
                    </label>
                    <select
                        id="categorySelect"
                        className="form-select"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="PolAff">Political Affiliation</option>
                        <option value="Gender">Gender</option>
                        {/* <option value="Rank">Rank</option> */}
                        {/* <option value="Department">Department</option> */}
                        <option value="Belief">Belief</option>
                        <option value="Age">Age</option>

                    </select>
                </div>
                <div className="mb-3 col-md-4">
                    {chartData.labels && chartData.datasets && (
                        <ChartFormat type="doughnut" data={chartData} options={{
                            plugins: {
                                legend: {
                                    labels: {
                                        color: '#333333', // Set a darker color for the labels
                                        font: {
                                            size: 14, // Optional: Adjust font size
                                            weight: 'bold', // Optional: Make the text bold
                                        },
                                    },
                                },
                            },
                        }} />
                    )}
                </div>
            </div>
        </div>
    );
}