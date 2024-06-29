import styles from "./RenderArea.module.css";

export default function RenderArea({ result }: { result: string }) {
  return <div className={styles.main}>{result}</div>;
}
