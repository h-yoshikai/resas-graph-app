import styles from "../styles/Home.module.css";

import GraphArea from "@/src/components/GraphArea";
import SelectPrefectureArea from "@/src/components/SelectPrefectureArea";

export default function Home() {
  return (
    <>
      <GraphArea />
      <div className={styles.container}>
        <SelectPrefectureArea />
      </div>
    </>
  );
}
