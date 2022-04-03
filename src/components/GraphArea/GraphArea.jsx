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

export const GraphArea = ({ series }) => {
  return (
    <div style={{ height: "300px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid />
          <XAxis dataKey="year" allowDuplicatedCategory={false} />
          <YAxis />
          <Tooltip />
          <Legend />
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
