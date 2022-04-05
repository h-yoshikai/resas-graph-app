import useSWRImmutable from "swr";

import PrefectureCheckBox from "@/src/components/PrefectureCheckBox";
import classes from "@/src/components/SelectPrefectureArea/SelectPrefectureArea.module.css";
import { fetcher } from "@/src/utils/fetcher";

export const SelectPrefectureArea = ({ onChange }) => {
  const { data, error } = useSWRImmutable("/api/prefectures", fetcher);
  if (!data && !error) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>error</div>;
  }

  return (
    <div>
      <h2 className={classes.title}>都道府県一覧</h2>
      <div className={classes.prefectureArea}>
        {data.result.map((pref) => (
          <PrefectureCheckBox
            key={pref.prefCode}
            prefCode={pref.prefCode}
            prefName={pref.prefName}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  );
};
