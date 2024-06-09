import { BgBanner, BgBannerMobile, Pattern } from "@/assets/images";
import useWidth from "@/hooks/useWidth";
import { default as Banner3 } from "@assets/banner3.jpeg";
import { default as Vid1 } from "@assets/vid1.mp4";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Grid } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import styles from "./index.module.scss";
const Banner: FC = () => {
  const { t } = useTranslation();
  const width = useWidth();
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <section
      className={styles.wrapper}
      style={{
        background: `url(${width < 768 ? BgBannerMobile : BgBanner}) ,
        rgba(0, 0, 0, 0.6)`,
      }}
    >
      <div className={styles.container}>
        <div className="container">
          <Grid
            container
            columnSpacing={2}
            justifyContent={"center"}
            alignItems={"center"}
            className={styles.banner}
          >
            <Grid item xs={12} md={6} className={styles.left}>
              <div className={styles.leftContent}>
                <h1>July Yoga</h1>
                <p>{t("BANNER_CONTENT")}</p>

                <a
                  href="https://www.facebook.com/profile.php?id=100057118884309"
                  target="_blank"
                  className="primaryBtn"
                >
                  Liên hệ
                  <ArrowRightAltIcon />
                </a>
              </div>
            </Grid>
            <Grid item xs={12} md={6} className={styles.right}>
              <img className={styles.img1} src={Pattern} alt="pattern" />
              <div
                className={styles.img2Wrapper}
                onClick={() => {
                  open();
                }}
              >
                {/* <div className={styles.playBtn}>
                  <PlayCircle />
                </div> */}
                <img className={styles.img2} src={Banner3} alt="tap" />
              </div>
              <Modal
                opened={opened}
                onClose={close}
                centered
                withCloseButton={false}
                classNames={{
                  body: styles.modalBody,
                }}
              >
                <video controls>
                  <source src={Vid1} type="video/mp4" />
                </video>
              </Modal>
            </Grid>
          </Grid>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 280"
        className={styles.svg}
      >
        <path fillOpacity={1}>
          <animate
            attributeName="d"
            dur="20000ms"
            repeatCount="indefinite"
            values="M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,234.7C672,203,768,149,864,117.3C960,85,1056,75,1152,90.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z; M0,160L48,181.3C96,203,192,245,288,234.7C384,224,480,160,576,133.3C672,107,768,117,864,138.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;												 M0,64L48,74.7C96,85,192,107,288,133.3C384,160,480,192,576,170.7C672,149,768,75,864,80C960,85,1056,171,1152,181.3C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
      M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,234.7C672,203,768,149,864,117.3C960,85,1056,75,1152,90.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;"
          />
        </path>
      </svg>
    </section>
  );
};

export default Banner;
