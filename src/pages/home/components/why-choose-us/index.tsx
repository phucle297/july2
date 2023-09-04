import { FC } from "react";
import styles from "./index.module.scss";
import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Tap3 } from "@/assets/images";
import useWidth from "@/hooks/useWidth";

const WhyChooseUs: FC = () => {
  const width = useWidth();
  const { t } = useTranslation();
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <Grid container columnSpacing={2} alignItems={"center"}>
          <Grid item xs={12} md={6} className={styles.left}>
            {width < 1024 && (
              <h1
                style={{
                  textAlign: "center",
                }}
              >
                {t("WHY_CHOOSE_US")}
              </h1>
            )}
            <div className={styles.img}>
              <img src={Tap3} alt="tap3" />
            </div>

            <div className={`${styles.item3} ${styles.item}`}>
              <h3>{t("WHY_CHOOSE_US_3")}</h3>
              <p>{t("WHY_CHOOSE_US_3_CONTENT")}</p>
            </div>
          </Grid>
          <Grid item xs={12} md={6} className={styles.right}>
            {width >= 1024 && <h1>{t("WHY_CHOOSE_US")}</h1>}

            <div className={`${styles.item1} ${styles.item}`}>
              <h3>{t("WHY_CHOOSE_US_1")}</h3>
              <p>{t("WHY_CHOOSE_US_1_CONTENT")}</p>
            </div>

            <div className={`${styles.item2} ${styles.item}`}>
              <h3>{t("WHY_CHOOSE_US_2")}</h3>
              <p>{t("WHY_CHOOSE_US_2_CONTENT")}</p>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default WhyChooseUs;
