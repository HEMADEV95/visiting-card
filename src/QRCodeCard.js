import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VisitingCard from "./VisitingCard";

function App() {
  // 🔒 Permanent QR value (ye kabhi change nahi karega)
  const visitingCardUrl = "https://mycard.in/card";

  return (
    <Router>
      <Routes>
        {/* QR Page */}
        <Route
          path="/"
          element={
            <div style={{ textAlign: "center", marginTop: "50px" }}>
              <h2>Scan QR card to connect us</h2>
              <QRCodeCanvas
                value={visitingCardUrl}
                size={220}
                bgColor="#ffffff"
                fgColor="#000000"
              />
              <p>{visitingCardUrl}</p>
            </div>
          }
        />

        {/* Visiting Card Page */}
        <Route path="/card" element={<VisitingCard />} />
      </Routes>
    </Router>
  );
}

export default App;
