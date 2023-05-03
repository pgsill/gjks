import styles from "./FirmFacts.module.scss";
import { FirmFactCard } from "../FirmFactCard/FirmFactCard";
import { Button } from "../Button/Button";

import closeIcon from "../../assets/close.svg";

const CloseButton = () => (
  <button className={styles.closeButton}>
    <img alt="Close button" src={closeIcon} />
  </button>
);

const Grid = ({ children }) => <div className={styles.grid}>{children}</div>;

export const FirmFacts = () => {
  return (
    <div className={styles.mainPage}>
      <div className={styles.content}>
        <CloseButton />

        <h2 className={styles.heading}>Firm Facts</h2>

        <Grid>
          <FirmFactCard centered>
            <Button
              variant="icon"
              text="This is a two line button that terminates with an ellipsis for no content"
            />
          </FirmFactCard>

          <FirmFactCard centered>
            <Button
              variant="icon"
              text="This is a two line button that terminates with an ellipsis for no content"
            />
          </FirmFactCard>

          <FirmFactCard centered>
            <Button text="This is a one line button" />
          </FirmFactCard>

          <FirmFactCard centered>
            <Button
              variant="icon"
              text="This is a two line button that terminates with an ellipsis for no content"
            />
          </FirmFactCard>

          <FirmFactCard>
            <Button
              variant="icon"
              text="This is a two line button that terminates with an ellipsis for no content"
            />
          </FirmFactCard>

          <FirmFactCard>
            <Button
              disabled
              variant="icon"
              text="This is a two line button that terminates with an ellipsis for no content"
            />
          </FirmFactCard>

          <FirmFactCard variant="border">
            <Button
              variant="icon"
              text="This is a two line button that terminates with an ellipsis for no content"
            />
          </FirmFactCard>
        </Grid>
      </div>
    </div>
  );
};
