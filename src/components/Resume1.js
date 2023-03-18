import { Document, Page, pdfjs } from "react-pdf";
import React, { useState, useEffect } from "react";
import { Container, row } from "bootstrap";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume1 = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <div>
      <row className="resume">
        {/* <Document file={resumeLink} className="d-flex justify-content-center">
          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
        </Document> */}
      </row>
    </div>
  );
};

export default Resume1;
