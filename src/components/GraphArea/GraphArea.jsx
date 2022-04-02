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
import useSWR from "swr";

import { fetcher } from "@/src/utils/fetcher";

export const GraphArea = () => {
  const { data: data1, error: error1 } = useSWR("api/population/1", fetcher);
  const { data: data2, error: error2 } = useSWR("api/population/2", fetcher);
  if (!data1 || !data2) {
    return <div>Loading...</div>;
  }

  if (error1 || error2) {
    return <div>error</div>;
  }

  const series = [
    { name: "北海道", data: data1.result.data[0].data },
    { name: "青森県", data: data2.result.data[0].data },
  ];
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
