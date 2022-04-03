import classes from "@/src/components/PrefectureCheckBox/PrefectureCheckBox.module.css";

export const PrefectureCheckBox = ({ prefCode, prefName, onChange }) => {
  return (
    <div className={classes.checkbox}>
      <input
        type="checkbox"
        name="prefecture"
        id={`prefCode${prefCode}`}
        onChange={(e) => onChange(prefCode, prefName, e.target.checked)}
      />
      <label htmlFor={`prefCode${prefCode}`}>
        {prefName.length === 3 ? prefName + "　" : prefName}
      </label>
    </div>
  );
};
