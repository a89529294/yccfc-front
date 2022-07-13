import React, { useState } from "react";
import ProgressBar from "../components/reservation/ProgressBar";

function Reservation() {
  const [stage, setStage] = useState(0);
  return (
    <div className="px-20 pt-10 pb-24 mx-24 mt-20 bg-white font-noto-sans">
      <ProgressBar />
    </div>
  );
}

export default Reservation;
