import { useRecordContext } from "react-admin";
import style from "./booleanStarField.module.css";

// eslint-disable-next-line no-unused-vars
const BooleanStarField = ({ source, label }: { source: string, label: string }) => {
  const record = useRecordContext();
  if (!record) return null;
  return record[source] ? (
    <i className={`${style.star} fa-solid fa-star`} />
  ) : (
    <i className={`${style.star} fa-regular fa-star`} />
  );
};

export default BooleanStarField;
