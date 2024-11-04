import styles from "./page.module.scss";

const Properties = () => {
  return (
    <>
      <h1>Properties</h1>
      <h2>Logical properties</h2>
      <div className={styles["click-me"]}>Click</div>
      <h2>display: contents</h2>
      <div className={styles["display-contents"]}>
        <ul>
          <li>first</li>
          <li>second</li>
          <li>third</li>
          <li>fourth</li>
          <li>fifth</li>
          <li>sixth</li>
          <li>seventh</li>
          <li>eigth</li>
          <li>nineth</li>
          <li>tenth</li>
        </ul>
        <img src="https://placehold.co/600x50" alt="" />
      </div>
    </>
  );
};

export default Properties;
