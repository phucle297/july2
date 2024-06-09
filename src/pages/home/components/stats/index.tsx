import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import HourglassEmptyOutlinedIcon from "@mui/icons-material/HourglassEmptyOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import { FC } from "react";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";
import ReactVisibilitySensor from "react-visibility-sensor";
import styles from "./index.module.scss";

const Stats: FC = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.item}>
          <SentimentSatisfiedAltOutlinedIcon />
          <CountUp end={1200} redraw={true}>
            {({ countUpRef, start }) => (
              <ReactVisibilitySensor onChange={start} delayedCall>
                <p className={styles.num}>
                  <span ref={countUpRef} />+
                </p>
              </ReactVisibilitySensor>
            )}
          </CountUp>
          <p>{t("STUDENTS")}</p>
        </div>
        <div className={styles.item}>
          <AccessTimeOutlinedIcon />
          <CountUp end={10} redraw={true}>
            {({ countUpRef, start }) => (
              <ReactVisibilitySensor onChange={start} delayedCall>
                <p className={styles.num}>
                  <span ref={countUpRef} />+
                </p>
              </ReactVisibilitySensor>
            )}
          </CountUp>
          <p>{t("YOE")}</p>
        </div>
        <div className={styles.item}>
          <HourglassEmptyOutlinedIcon />
          <CountUp end={10000} redraw={true}>
            {({ countUpRef, start }) => (
              <ReactVisibilitySensor onChange={start} delayedCall>
                <p className={styles.num}>
                  <span ref={countUpRef} />+
                </p>
              </ReactVisibilitySensor>
            )}
          </CountUp>
          <p>{t("TEACHING_HOURS")}</p>
        </div>
      </div>
    </section>
  );
};
export default Stats;
