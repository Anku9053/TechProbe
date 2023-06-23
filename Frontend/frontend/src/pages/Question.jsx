import React, { useEffect, useState } from "react";

const Question = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const storedData = localStorage.getItem("que");
    setData(storedData);
  }, []);

  return (
    <div className="container" style={{ border: "2px solid red" }}>
      {data}
    </div>
  );
};

export default Question;
