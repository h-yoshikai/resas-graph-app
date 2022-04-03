import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import classes from "@/src/components/GraphArea/GraphArea.module.css";

export const GraphArea = ({ series }) => {
  return (
    <div className={classes.container}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          margin={{
            top: 20,
            right: 20,
            left: 5,
            bottom: 20,
          }}
        >
          <CartesianGrid />
          <XAxis
            dataKey="year"
            allowDuplicatedCategory={false}
            label={{
              value: "年度",
              position: "insideBottom",
              offset: -10,
            }}
          />
          <YAxis
            label={{
              value: "人口数(万人)",
              angle: -90,
              position: "insideLeft",
            }}
            tickFormatter={(number) => number / 10000}
          />
          <Tooltip />
          <Legend verticalAlign="top" />
          {series.map((item, index) => (
            <Line
              dataKey="value"
              data={item.data}
              name={item.name}
              key={item.name}
              stroke={COLORS[index % 9]}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const COLORS = [
  "#FF4B00",
  "#005AFF",
  "#03AF7A",
  "#4DC4FF",
  "#F6AA00",
  "#FFF100",
  "#000000",
  "#990099",
  "#84919E",
];
