import PrefectureCheckBox from "@/src/components/PrefectureCheckBox";

export const SelectPrefectureArea = () => {
  return (
    <div>
      {PREFECTURE_LIST.result.map((pref) => (
        <PrefectureCheckBox
          key={pref.prefCode}
          prefCode={pref.prefCode}
          prefName={pref.prefName}
        />
      ))}
    </div>
  );
};

const PREFECTURE_LIST = {
  message: null,
  result: [
    {
      prefCode: 1,
      prefName: "北海道",
    },
    {
      prefCode: 2,
      prefName: "青森県",
    },
    {
      prefCode: 3,
      prefName: "岩手県",
    },
    {
      prefCode: 4,
      prefName: "宮城県",
    },
    {
      prefCode: 5,
      prefName: "秋田県",
    },
  ],
};
