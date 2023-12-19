import { useRecordContext } from "react-admin";
import style from "./limitedTextField.module.css";

// eslint-disable-next-line no-unused-vars
const TextCustomField = ({ source, label, width = "300" }: { source: string, label: string, width: string }) => {
  const record = useRecordContext();
  if (!record) return null;
  return <p className={style.text} style={{ maxWidth: width+"px" }}>{record[source]}</p>;
};

export default TextCustomField;
