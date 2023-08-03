import React from "react";
import "../styles.css";

const Footer = () => {

    let timeStart = new Date().getFullYear();
    const [year] = useState(timeStart)

    return(
        <div className="container" id="Footer">
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