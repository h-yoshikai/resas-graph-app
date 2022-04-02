import styles from "../styles/Home.module.css";

import SelectPrefectureArea from "@/src/components/SelectPrefectureArea";

export default function Home() {
  return (
    <div className={styles.container}>
      <SelectPrefectureArea />
    </div>
  );
}
