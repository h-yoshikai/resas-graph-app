import { useState, useCallback } from "react";

import GraphArea from "@/src/components/GraphArea";
import SelectPrefectureArea from "@/src/components/SelectPrefectureArea";
import styles from "@/src/styles/Home.module.css";
import { fetcher } from "@/src/utils/fetcher";

export const PopulationGraphByPrefecture = () => {
  const [series, setSeries] = useState([]);

  const handleChange = useCallback(async (prefCode, prefName, isChecked) => {
    if (isChecked) {
      const data = await fetcher(`/api/population/${prefCode}`);
      setSeries((prevSeries) => {
        if (!data) return [...prevSeries];
        return [
          ...prevSeries,
          { name: prefName, data: data.result.data[0].data },
        ];
      });
    } else {
      setSeries((prevSeries) => {
        return prevSeries.filter((item) => item.name !== prefName);
      });
    }
  }, []);

  return (
    <>
      <GraphArea series={series} />
      <div className={styles.container}>
        <SelectPrefectureArea onChange={handleChange} />
      </div>
    </>
  );
};
