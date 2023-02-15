import React from "react";
import resim from "../image/businessCard.png"

const Contact = () => {
    return (
        <div className="businessCard">
            <img  className="personalInfo" src={resim} alt="Eren"/>
            <img className="profile" src="https://avatars.githubusercontent.com/u/81101706?s=400&u=c82e8b65ac7c18d83ba8cfe1df868189204ace3b&v=4" alt="profile"/>
        </div>
    );
}

export default Contact;