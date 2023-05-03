import { combineStrings } from "../../utils/combineStrings";
import styles from "./FirmFactCard.module.scss";

const variants = {
  default: "defaultHover",
  border: "borderHover",
};

export const FirmFactCard = ({ children, centered, disabled, variant }) => (
  <div
    className={combineStrings(
      styles.firmFactCard,
      styles[variants[variant || "default"]],
      centered ? styles.centered : styles.nonCentered,
      disabled && styles.disabled
    )}
  >
    {children}
  </div>
);
