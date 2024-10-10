import styles from "../style.module.css";
export default function RecordLabelNotFound() {
  return (
    <div className= {`${styles.container} ${styles["not-found"]}`}>
      <h1>404 Error - Not Found</h1>
      <p>The page you&apos;re looking for can&apos;t be found.</p>
      <a href="/record-label">Go back</a>
    </div>
  );
}
