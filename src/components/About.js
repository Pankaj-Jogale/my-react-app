import React from "react";
import bg from "../assets/home-bg.jpg";

const About = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        width: "100%",
        minHeight: "93vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: 0.5,
      }}
    >
      <h1 style={{ color: "white" }}> </h1>
      <a
        href="https://github.com/Pankaj-Jogale"
        target="_blank"
        rel="noreferrer"
      >
        Coding Beauty
      </a>
    </div>
  );
};

export default About;
