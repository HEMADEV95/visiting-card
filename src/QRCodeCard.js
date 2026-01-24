import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Routes, Route } from "react-router-dom";
import VisitingCard from "./VisitingCard";

function App() {
  const visitingCardUrl = "https://visiting-card-two.vercel.app/card"; // local test
   //const visitingCardUrl = " https://endorse.co.in/card";

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>Scan QR card to connect us</h2>
            <QRCodeCanvas value={visitingCardUrl} size={220} />
          </div>
        }
      />
      <Route path="/card" element={<VisitingCard />} />
    </Routes>
  );
}

export default App;
