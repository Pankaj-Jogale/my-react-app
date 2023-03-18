import "./resume.scss";
import React, { Component } from "react";
import pdfFile from "./Jobresume.pdf";
export default function Resume() {
  return (
    <div className="front">
      <h1>Resume</h1>
      <a href={pdfFile} target="_blank">
        <button>View & Download Pdf</button>
      </a>
    </div>
  );
}
