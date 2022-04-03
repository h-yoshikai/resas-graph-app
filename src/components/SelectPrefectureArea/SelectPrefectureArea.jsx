import useSWRImmutable from "swr";

import PrefectureCheckBox from "@/src/components/PrefectureCheckBox";
import { fetcher } from "@/src/utils/fetcher";

export const SelectPrefectureArea = ({ onChange }) => {
  const { data, error } = useSWRImmutable("/api/prefectures", fetcher);
  if (!data) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>error</div>;
  }

  return (
    <div>
      {data.result.map((pref) => (
        <PrefectureCheckBox
          key={pref.prefCode}
          prefCode={pref.prefCode}
          prefName={pref.prefName}
          onChange={onChange}
        />
      ))}
    </div>
  );
};
