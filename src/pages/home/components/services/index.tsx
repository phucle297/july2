import { FC } from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import styles from "./index.module.scss";
import { useTranslation } from "react-i18next";
import { Grid } from "@mui/material";
import { Service } from "@/assets/images";

const Services: FC = () => {
  const { t } = useTranslation();
  return (
    <section id="services" className={styles.wrapper}>
      <div className={styles.container}>
        <h1>{t("COURSES")}</h1>

        <Grid
          container
          spacing={4}
          justifyContent={"center"}
          sx={{
            my: 2,
          }}
        >
          <Grid item xs={12} md={5} className={styles.left}>
            <div>
              <img src={Service} alt="service" />
            </div>
          </Grid>
          <Grid item xs={12} md={5} className={styles.right}>
            <ul>
              <li className={styles.textItem}>
                <p>
                  <AdjustIcon
                    sx={{
                      color: "#15803d",
                    }}
                  />{" "}
                  {t("COURSES_0")}
                </p>
              </li>
              <li className={styles.textItem}>
                <p>
                  <AdjustIcon
                    sx={{
                      color: "#15803d",
                    }}
                  />{" "}
                  {t("COURSES_1")}
                </p>
              </li>
              <li className={styles.textItem}>
                <p>
                  <AdjustIcon
                    sx={{
                      color: "#15803d",
                    }}
                  />{" "}
                  {t("COURSES_2")}
                </p>
              </li>
            </ul>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Services;
