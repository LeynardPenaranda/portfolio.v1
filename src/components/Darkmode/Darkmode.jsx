import styles from "./Darkmode.module.css";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import SunnyIcon from "@mui/icons-material/Sunny";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import { useProps } from "../PostProvider";

function Darkmode() {
  const { isOpen, setIsOpen, isDarkorLight, setisDarkorLight } = useProps();
  return (
    <>
      {isOpen ? (
        <div className={styles.darkContainerOpen}>
          {isDarkorLight ? (
            <SunnyIcon
              className={styles.sun}
              onClick={() => setisDarkorLight(!isDarkorLight)}
            />
          ) : (
            <BedtimeIcon
              className={styles.moon}
              onClick={() => setisDarkorLight(!isDarkorLight)}
            />
          )}
          <KeyboardDoubleArrowLeftIcon
            className={styles.arrowClose}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      ) : (
        <div className={styles.darkContainerClose}>
          <KeyboardDoubleArrowRightIcon
            className={styles.arrowClose}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      )}
    </>
  );
}

export default Darkmode;
