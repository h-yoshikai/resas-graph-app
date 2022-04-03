export const PrefectureCheckBox = ({ prefCode, prefName, onChange }) => {
  return (
    <div>
      <input
        type="checkbox"
        name="prefecture"
        id={`prefCode${prefCode}`}
        onChange={(e) => onChange(prefCode, prefName, e.target.checked)}
      />
      <label htmlFor={`prefCode${prefCode}`}>{prefName}</label>
    </div>
  );
};
