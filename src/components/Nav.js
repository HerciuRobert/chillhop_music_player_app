import React from "react";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import logo from "../img/podcats.svg";

const Nav = ({ playlistStatus, setPlaylistStatus }) => {
    return (
        <nav>
           <h1>Chillcat</h1> 
            <button onClick= {() => setPlaylistStatus(!playlistStatus)}>
                <img className="img-logo" src={logo} alt="Podcats"/>
                {/* <FontAwesomeIcon icon={faMusic}/> */}
            </button>
        </nav>
    );
}

export default Nav;
