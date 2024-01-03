import { Train1, Train3, Train4 } from "@/assets/images";
import AdjustIcon from "@mui/icons-material/Adjust";
import { Grid } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import styles from "./index.module.scss";
const AboutUs: FC = () => {
  const { t } = useTranslation();
  return (
    <section id="about-us" className={styles.wrapper}>
      <Grid
        container
        columnSpacing={2}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Grid item xs={12} md={6} className={styles.left}>
          <div>
            <h1>{t("INTRODUCE")}</h1>
            <ul>
              <li>
                <p>
                  <AdjustIcon
                    sx={{
                      color: "#15803d",
                    }}
                  />{" "}
                  {t("INTRODUCE_1")}
                </p>
              </li>
              <li>
                <p>
                  <AdjustIcon
                    sx={{
                      color: "#15803d",
                    }}
                  />{" "}
                  {t("INTRODUCE_2")}
                </p>
              </li>
              <li>
                <p>
                  <AdjustIcon
                    sx={{
                      color: "#15803d",
                    }}
                  />{" "}
                  {t("INTRODUCE_3")}
                </p>
              </li>
              <li>
                <p>
                  <AdjustIcon
                    sx={{
                      color: "#15803d",
                    }}
                  />{" "}
                  {t("INTRODUCE_4")}
                </p>
              </li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={styles.right}>
          <Grid container columnSpacing={2}>
            <Grid item xs={12} md={7.5}>
              <img src={Train3} alt="train" className={styles.img1} />
            </Grid>
            <Grid item xs={12} md={4} sx={{ mt: 2 }}>
              <Grid container rowSpacing={1}>
                <Grid item xs={12}>
                  <img src={Train1} alt="train" className={styles.img2} />
                </Grid>
                <Grid item xs={12}>
                  <img src={Train4} alt="train" className={styles.img3} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default AboutUs;
