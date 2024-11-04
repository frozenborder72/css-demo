import styles from "./page.module.scss";

const Accessibility = () => {
  return (
    <>
      <h1>Accessibility</h1>
      <h2 className={styles.animate}>prefers-reduced-motion: reduce</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate eos
        explicabo reiciendis dolore voluptatibus iste saepe distinctio harum
        blanditiis incidunt.
      </p>

      <div className={styles["aria-selected"]}>
        <h2>aria-selected</h2>
        <div>
          <span className="btn" aria-selected="true">
            hello
          </span>
          <span className="btn" aria-selected="false">
            hello
          </span>
          <span className="btn" aria-selected="false">
            hello
          </span>
        </div>
      </div>
    </>
  );
};

export default Accessibility;
