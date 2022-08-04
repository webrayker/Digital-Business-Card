import React from "react"
import twitter from "../images/twitter-icon.svg"
import facebook from "../images/facebook-icon.svg"
import instagram from "../images/instagram-icon.svg"
import github from "../images/github-icon.svg"

export default function Footer() {
    return (
        <div className="footer">
                <a className="socials" href="#"><img src={twitter} alt="twitter icon" ></img></a>
                <a className="socials" href="#"><img src={facebook} alt="facebook icon"></img></a>
                <a className="socials" href="#"><img src={instagram} alt="instagram icon"></img></a>
                <a className="socials" href="#"><img src={github} alt="github icon"></img></a>
        </div>
    )
}