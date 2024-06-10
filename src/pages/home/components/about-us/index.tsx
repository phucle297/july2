import { Train1, Train3 } from "@/assets/images";
import { default as Ya } from "@/assets/ya.jpeg";
import { default as Ikigai } from "@/assets/ikigai.jpeg";
import AdjustIcon from "@mui/icons-material/Adjust";
import { Grid } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import styles from "./index.module.scss";
const AboutUs: FC = () => {
  const { t } = useTranslation();
  return (
    <section id="about-us" className={styles.wrapper}>
      <div className="">
        <Grid
          container
          columnSpacing={2}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Grid item xs={12} md={6} className={styles.left}>
            <div>
              <h1>{t("INTRODUCE")}</h1>
              <p>
                July Yoga chuyên cung cấp các dịch vụ trong lĩnh vực chăm sóc
                sức khỏe bằng nhiều loại hình yoga khác nhau:
              </p>
              <ul>
                <li>
                  <p>
                    <AdjustIcon
                      sx={{
                        color: "#15803d",
                      }}
                    />{" "}
                    Các lớp Đào tạo Huấn luyện viên Yoga. Các Huấn luyện viên
                    sau tốt nghiệp được cấp bằng Quốc tế của hiệp hội US Yoga
                    Alliance. Hiện nay, Học viện IKIGAI YOGA ACADEMY là đơn vị
                    trực thuộc của JULY YOGA chuyên đào tạo huấn luyện viên yoga
                    200H, 300H.
                  </p>
                </li>
                <li>
                  <p>
                    <AdjustIcon
                      sx={{
                        color: "#15803d",
                      }}
                    />{" "}
                    Dịch vụ yoga kèm PT 1:1, kèm theo nhóm tại trung tâm, tại
                    nhà. (Phục hồi, cơ bản, nâng cao tùy theo nhu cầu của học
                    viên).
                  </p>
                </li>
                <li>
                  <p>
                    <AdjustIcon
                      sx={{
                        color: "#15803d",
                      }}
                    />{" "}
                    Các lớp yoga cộng đồng.
                  </p>
                </li>
                <li>
                  <p>
                    <AdjustIcon
                      sx={{
                        color: "#15803d",
                      }}
                    />{" "}
                    Các lớp Inside yoga (Nền tảng cơ bản cho các lớp Inside
                    Flow).
                  </p>
                </li>
                <li>
                  <p>
                    <AdjustIcon
                      sx={{
                        color: "#15803d",
                      }}
                    />{" "}
                    Các lớp Inside Flow – được phát triển trên nền tảng vinyasa,
                    trong đó các chuyển động phù hợp với beat nhạc và cấu trúc,
                    năng lượng của bài hát. (Lớp Inside Flow cơ bản và nhiều cấp
                    độ).
                  </p>
                </li>
              </ul>
              <p>
                Định hướng phát triển của JULY YOGA nói chung và Học viện IKIGAI
                YOGA ACADEMY nói riêng là trở thành trung tâm đào tạo yoga,
                thiền được ưa thích và có uy tín tại Việt Nam.
              </p>
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
                    <img src={Ya} alt="train" className={styles.img31} />
                    <img src={Ikigai} alt="train" className={styles.img32} />
                  </Grid>
                  <Grid item xs={12}>
                    <img src={Train1} alt="train" className={styles.img2} />
                  </Grid>

                  {/* <Grid item xs={6}>
                    <img src={Train200} alt="train" className={styles.img3} />
                    <img src={Train300} alt="train" className={styles.img3} />
                  </Grid> */}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default AboutUs;
