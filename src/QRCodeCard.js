import React from "react";
import { QRCodeCanvas } from "qrcode.react";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VisitingCard from "./VisitingCard";

function App() {
  const visitingCardUrl = "https://visiting-card-m43tnnh8u-hemas-projects-86c5308f.vercel.app/card";
 //  const visitingCardUrl = "https://amazing-starburst-f9eb00.netlify.app/card";
  //const visitingCardUrl = "http://localhost:3000/card";
 // const visitingCardUrl = window.location.origin + "/card";


  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ textAlign: "center", marginTop: "50px" }}>
              <h1>Scan QR card to connect us</h1>
              <QRCodeCanvas value={visitingCardUrl} />
            </div>
          }
        />
        <Route path="/card" element={<VisitingCard />} />
      </Routes>
    </Router>
  );
}

export default App;

