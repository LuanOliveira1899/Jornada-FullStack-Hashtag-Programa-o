import React from "react";
import logoSpotify from "../assets/logo/spotify-logo.png";
import { Link } from "react-router-dom";
import search from "../assets/logo/search.png";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logoSpotify} alt="Logo do Spotify" />
      </Link>

      <Link to="/" className="item-list__link">
        <h1>Spotify</h1>
      </Link>
    </div>
  );
};

export default Header;
