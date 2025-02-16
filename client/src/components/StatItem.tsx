import React from "react";

const StatItem = ({ label, value }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg text-center">
      <div className="text-cyan-400 font-semibold text-xl mb-1">{value}</div>
      <div className="text-gray-400 text-sm">{label}</div>
    </div>
  );
};

export default StatItem;
