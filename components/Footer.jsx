import React, {useState} from "react";
import "../styles/styles.module.css";

const Footer = () => {

    let timeStart = new Date().getFullYear();
    const [year] = useState(timeStart)

    return(
        <div className="container border rounded-top" id="Footer">
            <div className="row bg-lessbrown">
                <center>
                    <footer>
                        Made by TerribahSphlear 
                    </footer>
                </center>
            </div>
        </div>
    )
}

export default Footer;