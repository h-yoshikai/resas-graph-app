import PrefectureCheckBox from "@/src/components/PrefectureCheckBox";

export const SelectPrefectureArea = ({ prefectureList }) => {
  return (
    <div>
      {prefectureList.map((pref) => (
        <PrefectureCheckBox
          key={pref.prefCode}
          prefCode={pref.prefCode}
          prefName={pref.prefName}
        />
      ))}
    </div>
  );
};
