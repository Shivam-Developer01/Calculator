import style from "./Display.module.css";

function Display({ DisplayText }) {
  return (
    <div className={style.Display}>
      <input
        type="text"
        placeholder="Enter Number"
        className={style.input}
        value={DisplayText}
        readOnly
      />
    </div>
  );
}

export default Display;
