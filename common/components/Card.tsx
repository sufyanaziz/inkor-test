import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border border-solid p-5">
      <h1 className="font-bold mb-5">React JS Test PT CYBER EDU INKOR</h1>
      {children}
    </div>
  );
};

export default Card;
