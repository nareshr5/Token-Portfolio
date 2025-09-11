//App.js

import React, { useState } from "react";
import { PieChart, Pie, Tooltip, Cell } from "recharts";

const Piechart = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const data = [
    { name: "BTC", students: 21 },
    { name: "ETH", students: 64 },
    { name: "SOL", students: 14 },
    { name: "DOGE", students: 14 },
    { name: "USDC", students: 14 },
    { name: "SOLANA", students: 14 },
  ];

  const COLORS = [
    "#10B981",
    "#A78BFA",
    "#60A5FA",
    "#18C9DD",
    "#FB923C",
    "#FB7185",
  ];

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

 

  return (
    <PieChart width={160} height={160}>
      <Pie
        activeIndex={activeIndex}
        data={data}
        dataKey="students"
        outerRadius={80}
        innerRadius={40}
        fill="green"
        onMouseEnter={onPieEnter}
        style={{ cursor: "pointer", outline: "none" }} // Ensure no outline on focus
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default Piechart;
