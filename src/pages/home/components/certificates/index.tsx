import AdjustIcon from "@mui/icons-material/Adjust";
import {
  Cer1,
  Cer2,
  Cer3,
  Cer4,
  Cer5,
  Cer6,
  Cer7,
  Cer8,
} from "@/assets/images";
import { Grid } from "@mui/material";
import { FC } from "react";
import Slider from "react-slick";
import styles from "./index.module.scss";
import { useTranslation } from "react-i18next";

const Certificates: FC = () => {
  const { t } = useTranslation();
  const arrCer = [Cer1, Cer2, Cer3, Cer4, Cer5, Cer6, Cer7, Cer8];
  const settings = {
    nextArrow: <></>,
    prevArrow: <></>,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
    centerPadding: "10px",
  };

  return (
    <section className={styles.wrapper}>
      <div className="container">
        <h1>{t("CERTIFICATES")}</h1>
        <Grid container spacing={4} justifyContent={"center"} sx={{ mt: 2 }}>
          <Grid item xs={12} md={5}>
            <div className={styles.left}>
              <Slider {...settings}>
                {arrCer.map((item, index) => {
                  return (
                    <div key={index} className={styles.item}>
                      <img width={450} src={item} alt="certificate" />
                    </div>
                  );
                })}
              </Slider>
            </div>
          </Grid>
          <Grid item xs={12} md={5} className={styles.right}>
            <ul>
              {[...Array(6)].map((_, index) => {
                return (
                  <li key={index} className={styles.textItem}>
                    <p>
                      <AdjustIcon
                        sx={{
                          color: "#15803d",
                        }}
                      />{" "}
                      {t(`CERTIFICATES_${index + 1}`)}
                    </p>
                  </li>
                );
              })}
            </ul>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Certificates;
