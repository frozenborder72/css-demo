import styles from "./page.module.scss";

const AdvancedSelectors = () => {
  return (
    <>
      <h1>Advanced Selectors</h1>
      <h2>The Lobotomized Owl * + *</h2>
      <div className={styles["lobotomized-owl"]}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sequi
          excepturi iste reiciendis vel esse, aspernatur voluptate dignissimos
          inventore aliquid!
        </p>
        <p>
          Maiores cupiditate adipisci possimus tempora cumque, labore dicta,
          quod amet cum, aperiam corporis. Soluta illo quae nihil neque,
          explicabo possimus.
        </p>
        <p>
          Dolorem voluptas, ratione aspernatur similique eaque laudantium
          veritatis dolor voluptatum modi id accusantium eveniet deleniti autem
          optio, maiores quasi eius!
        </p>
      </div>
      <h2>:not() :has() :is() :where()</h2>
      <h3>An unnecessary very long title only for demonstration purposes</h3>
      <div className={styles.is}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
          quos.
          <em>Lorem, ipsum dolor.</em>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          autem!
          <span>Lorem, ipsum dolor.</span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid,
          culpa!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis corporis
          nemo ipsa incidunt assumenda natus voluptas fugit ab voluptatibus
          neque.
        </p>
        <p className={styles.asdf}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          illum non amet rem tenetur? Quo aliquid quisquam cum aut sit.
        </p>
      </div>
    </>
  );
};

export default AdvancedSelectors;
