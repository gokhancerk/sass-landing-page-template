import cn from "classnames";
import styles from "./index.module.css";

function Button({ appearance, children, ...props }) {
  return (
    <button
      className={cn(
        styles.base,
        appearance === "nav_btn" ? styles.nav_btn : undefined,
        appearance === "audience_btn" ? styles.audience_btn : undefined,
        appearance === "price_btn_container" ? styles.price_btn_container : undefined,
        appearance === "price_btn" ? styles.price_btn : undefined,
        appearance === "get_started_white" ? styles.get_started_white : undefined,
        appearance === "get_started_premium" ? styles.get_started_premium : undefined

      )}
    >
      {children}
    </button>
  );
}

export default Button;
