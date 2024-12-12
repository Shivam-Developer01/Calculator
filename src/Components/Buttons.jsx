import styles from "./Buttons.module.css";

function Buttons({ list, change }) {
  return (
    <div className="container-fluid {styles.container}">
      {list.map((item, index) => (
        <button
          type="button"
          className={styles.button}
          key={index}
          onClick={() => change(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default Buttons;
