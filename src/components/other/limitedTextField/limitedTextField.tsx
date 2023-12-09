import { useRecordContext } from "react-admin";
import style from "./limitedTextField.module.css";

const TextCustomField = ({ source }: { source: string }) => {
  const record = useRecordContext();
  if (!record) return null;
  return <p className={style.text}>{record[source]}</p>;
};

export default TextCustomField;
