import styles from "../styles/Home.module.css";

import SelectPrefectureArea from "@/src/components/SelectPrefectureArea";

export default function Home() {
  return (
    <div className={styles.container}>
      <SelectPrefectureArea prefectureList={PREFECTURE_LIST.result} />
    </div>
  );
}

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
