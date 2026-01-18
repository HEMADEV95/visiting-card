import { Routes, Route } from "react-router-dom";
import VisitingCard from "./VisitingCard";
import { QRCodeCanvas } from "qrcode.react";

function App() {
  const visitingCardUrl = "https://amazing-starburst-f9eb00.netlify.app/card";

  return (
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
  );
}

export default App;
