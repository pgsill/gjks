import { combineStrings } from "../../utils/combineStrings";
import styles from "./Button.module.scss";
import searchIcon from "../../assets/search-icon.svg";

const variants = {
  default: "defaultButton",
  icon: "iconButton",
};

export const Button = ({ text, disabled, variant }) => {
  const showIcon = variant === "icon";

  return (
    <button
      disabled={disabled}
      className={combineStrings(
        "button",
        styles.button,
        styles[variants[variant || "default"]],
        disabled && styles.disabled
      )}
    >
      {showIcon && <img alt="Search Icon" src={searchIcon} />}
      <span>{text}</span>
    </button>
  );
};
