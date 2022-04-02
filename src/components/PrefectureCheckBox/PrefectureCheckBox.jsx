export const PrefectureCheckBox = ({ prefCode, prefName }) => {
  return (
    <div>
      <input type="checkbox" name="prefecture" id={`prefCode${prefCode}`} />
      <label htmlFor={`prefCode${prefCode}`}>{prefName}</label>
    </div>
  );
};
