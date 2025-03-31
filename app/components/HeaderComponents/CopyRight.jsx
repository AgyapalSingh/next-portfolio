"use client"; 

import { useState, useEffect } from "react";

const CopyRight = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ag-copy-right">
      <p>© AGYAPAL SINGH. All rights reserved</p>

      <p>
        {dateTime.toLocaleDateString()} | {dateTime.toLocaleTimeString()}
      </p>
    </div>
  );
};

export default CopyRight;
