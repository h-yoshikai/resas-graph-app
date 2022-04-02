import GraphArea from "@/src/components/GraphArea";
import SelectPrefectureArea from "@/src/components/SelectPrefectureArea";
import styles from "@/src/styles/Home.module.css";

export const PopulationGraphByPrefecture = () => {
  return (
    <>
      <GraphArea />
      <div className={styles.container}>
        <SelectPrefectureArea />
      </div>
    </>
  );
};
