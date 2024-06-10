import { Grid } from "@mantine/core";
import styles from "./index.module.scss";
import useWidth from "@/hooks/useWidth";
import { default as Chuong } from "@assets/chuong.jpeg";
import { default as Img200 } from "@assets/200.jpeg";
import { default as Img300 } from "@assets/300.jpeg";
const Info = () => {
  const width = useWidth();
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h1>Học viện Ikigai Yoga Academy</h1>
        <div>
          <Grid>
            <Grid.Col span={width <= 768 ? 12 : 6} className={styles.info}>
              <div>
                <p>
                  Học viện đào tạo huấn luyện viên quốc tế Ikigai Yoga Academy
                </p>
                <p>
                  Ikigai yoga Academy - Đào tạo Huấn luyện viên Yoga trực thuộc
                  July Yoga
                </p>
                <a
                  href="https://www.yogaalliance.org/SchoolPublicProfile?sid=20889&lid=22108&fbclid=IwZXh0bgNhZW0CMTAAAR1y6emUpY7hn_n0KgSgv7FIPp5VHF7tPNMR5W2jGKyfu5o7cONn1K0mzDo_aem_AV7VS6kLji6Hkw-QZEDO4kWXfFpkWQ_WQDh5EjQRRRZlSunFxG8Z05iNpfOqA8UO5NfzMg7J1-390zgtAShAwwOs"
                  target="_blank"
                >
                  Tham khảo trên Yoga Alliance tại đây
                </a>
              </div>
            </Grid.Col>
            <Grid.Col span={width <= 768 ? 12 : 6} className={styles.chuong}>
              <Grid>
                <Grid.Col
                  span={width <= 768 ? 12 : 7}
                  className={styles.chuong}
                >
                  <img src={Chuong} alt="" />
                </Grid.Col>
                <Grid.Col
                  span={width <= 768 ? 12 : 5}
                  className={styles.chuong2}
                >
                  <img src={Img200} alt="" />
                  <img src={Img300} alt="" />
                </Grid.Col>
              </Grid>
            </Grid.Col>
          </Grid>
        </div>
      </div>
    </section>
  );
};

export default Info;
