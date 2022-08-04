import React from "react"
import profile from "../images/profile-icon.svg"
import email from "../images/mail-icon.svg"
import linkedin from "../images/linkedin-icon.svg"

export default function Info() {
    return (
        <div className="info">
            <img src={profile} alt="profile icon" className="info--icon"/>
            <h1 className="info--name">Laura Smith</h1>
            <h3 className="info--occupation">Frontend Developer</h3>
            <a target="_blank" className="info--website" href="#">laurasmith.website</a>
            <div className="info--buttons">
                <a target="_blank" className="info--email" href="#"><img src={email} alt="email icon"></img>Email</a>
                <a target="_blank" className="info--linkedin" href="#"><img src={linkedin} alt="linkedinicon"></img>LinkedIn</a>
            </div>         
        </div>
    )
}