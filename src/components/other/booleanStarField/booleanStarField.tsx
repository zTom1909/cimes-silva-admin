import { useRecordContext } from "react-admin";
import style from "./booleanStarField.module.css";

const BooleanStarField = ({ source }: { source: string }) => {
  const record = useRecordContext();
  if (!record) return null;
  return record[source] ? (
    <i className={`${style.star} fa-solid fa-star`} />
  ) : (
    <i className={`${style.star} fa-regular fa-star`} />
  );
};

export default BooleanStarField;
