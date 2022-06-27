import React from "react";
import "./Chart.css";
import {
  LineChart,
  Line,
  XAxis,
  
  CartesianGrid,
  Tooltip,
 
  ResponsiveContainer,
} from "recharts";

const Chart = ({ name, data, title, dataKey, grid }) => {
  return (
    <div className="chart">
      <h3>{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          {grid && <CartesianGrid strokeDasharray="3 3" sroke="#e0dfdf" />}

          <XAxis dataKey="name" />
          <Tooltip />
          <Line type="monotone" dataKey={dataKey} stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
