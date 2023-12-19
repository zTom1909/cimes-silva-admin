import { useRecordContext } from "react-admin";
import style from "./limitedTextField.module.css";

// eslint-disable-next-line no-unused-vars
const TextCustomField = ({ source, label }: { source: string, label: string }) => {
  const record = useRecordContext();
  if (!record) return null;
  return <p className={style.text}>{record[source]}</p>;
};

export default TextCustomField;
