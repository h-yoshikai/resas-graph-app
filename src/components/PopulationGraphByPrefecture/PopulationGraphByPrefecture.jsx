import { useState, useCallback } from "react";

import GraphArea from "@/src/components/GraphArea";
import styles from "@/src/components/PopulationGraphByPrefecture/PopulationGraphByPrefecture.module.css";
import SelectPrefectureArea from "@/src/components/SelectPrefectureArea";
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
    <div className={styles.container}>
      <SelectPrefectureArea onChange={handleChange} />
      <GraphArea series={series} />
    </div>
  );
};
