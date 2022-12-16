import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/airline.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Priority Airlines </h1>
        <p> YOUR DESTINATION OUR PRIORITY</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
