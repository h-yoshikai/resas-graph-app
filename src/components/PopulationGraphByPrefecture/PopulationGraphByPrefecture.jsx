import { useState } from "react";

import GraphArea from "@/src/components/GraphArea";
import SelectPrefectureArea from "@/src/components/SelectPrefectureArea";
import styles from "@/src/styles/Home.module.css";
import { fetcher } from "@/src/utils/fetcher";

export const PopulationGraphByPrefecture = () => {
  const [series, setSeries] = useState([]);

  const handleChange = async (prefCode, prefName, isChecked) => {
    const data = await fetcher(`/api/population/${prefCode}`);
    setSeries((prevSeries) => {
      return [
        ...prevSeries,
        { name: prefName, data: data.result.data[0].data },
      ];
    });
  };

  return (
    <>
      <GraphArea series={series} />
      <div className={styles.container}>
        <SelectPrefectureArea onChange={handleChange} />
      </div>
    </>
  );
};
