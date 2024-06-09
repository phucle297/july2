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
                  Các lớp Đào tạo Huấn luyện viên Yoga. Các Huấn luyện viên được
                  cấp bằng Quốc tế của hiệp hội US Yoga Alliance. Hiện nay,
                  trường IKIGAI YOGA ACADEMY là đơn vị trực thuộc của JULY YOGA
                  chuyên đào tạo các lớp huấn luyện viên
                  <span
                    style={{
                      display: "block",
                      marginLeft: "20px",
                    }}
                  >
                    o 200H HATHA, VINYASA FLOW AND RESTORATIVE YOGA TEACHER
                    TRAINING COURSE
                  </span>
                  <span
                    style={{
                      display: "block",
                      marginLeft: "20px",
                    }}
                  >
                    o 300H ASHTANGA, VINYASA FLOW YOGA TEACHER TRAINING COURSE
                  </span>
                </p>
              </li>

              <li className={styles.textItem}>
                <p>
                  <AdjustIcon
                    sx={{
                      color: "#15803d",
                    }}
                  />{" "}
                  Dịch vụ yoga kèm PT 1:1, kèm theo nhóm tại trung tâm, tại nhà.
                  (Phục hồi, cơ bản, nâng cao tùy theo nhu cầu của học viên).
                </p>
              </li>
              <li className={styles.textItem}>
                <p>
                  <AdjustIcon
                    sx={{
                      color: "#15803d",
                    }}
                  />{" "}
                  Các lớp yoga cộng đồng.
                </p>
              </li>
              <li className={styles.textItem}>
                <p>
                  <AdjustIcon
                    sx={{
                      color: "#15803d",
                    }}
                  />{" "}
                  Các lớp Inside yoga (Nền tảng cơ bản cho các lớp Inside Flow).
                </p>
              </li>
              <li className={styles.textItem}>
                <p>
                  <AdjustIcon
                    sx={{
                      color: "#15803d",
                    }}
                  />{" "}
                  Các lớp Inside Flow - được phát triển trên nền tảng vinyasa,
                  trong đó các chuyển động phù hợp với beat nhạc và cấu trúc,
                  năng lượng của bài hát. (Lớp Inside Flow cơ bản và nhiều cấp
                  độ).
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
