import styles from "./page.module.scss";

const CustomProperties = () => {
  return (
    <>
      <h1>Custom Properties</h1>
      <div className={styles["card-container"]}>
        <div>Hello I am a card</div>
        <div data-variant="inverted">Hello I am a variant</div>
      </div>
    </>
  );
};

export default CustomProperties;
