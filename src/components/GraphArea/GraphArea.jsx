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
  const { data, error } = useSWR("api/population/1", fetcher);
  if (!data) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>error</div>;
  }

  const series = { name: "北海道", data: data.result.data[0].data };
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
          <Line dataKey="value" data={series.data} name={series.name} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const testarray = [
  {
    year: 1960,
    value: 5039206,
  },
  {
    year: 1965,
    value: 5171800,
  },
  {
    year: 1970,
    value: 5184287,
  },
  {
    year: 1975,
    value: 5338206,
  },
  {
    year: 1980,
    value: 5575989,
  },
  {
    year: 1985,
    value: 5679439,
  },
  {
    year: 1990,
    value: 5643647,
  },
  {
    year: 1995,
    value: 5692321,
  },
  {
    year: 2000,
    value: 5683062,
  },
  {
    year: 2005,
    value: 5627737,
  },
  {
    year: 2010,
    value: 5506419,
  },
  {
    year: 2015,
    value: 5381733,
  },
  {
    year: 2020,
    value: 5216615,
  },
  {
    year: 2025,
    value: 5016554,
  },
  {
    year: 2030,
    value: 4791592,
  },
  {
    year: 2035,
    value: 4546357,
  },
  {
    year: 2040,
    value: 4280427,
  },
  {
    year: 2045,
    value: 4004973,
  },
];
