import React from "react";
import "./Main.css";
import ParticlesBg from "particles-bg";
import MainCard from "../../Components/MainCard/MainCard";

export default function Main() {
  return (
    <div id="Main" className="Main">

      <MainCard></MainCard>

      <ParticlesBg className="ParticlesBg" color="#ff6600" type="cobweb" bg={false} />

    </div>
  );
}

