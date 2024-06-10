import { Grid } from "@mantine/core";
import styles from "./index.module.scss";
import { default as Contact } from "@assets/contact.jpg";
import useWidth from "@/hooks/useWidth";
const ContactUs = () => {
  const width = useWidth();
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h1>Liên hệ</h1>
        <div className={styles.content}>
          <Grid>
            <Grid.Col span={width <= 768 ? 12 : 5} className={styles.left}>
              <p>Để biết thêm thông tin chi tiết, vui lòng liên hệ:</p>
              <p>
                Cô Trần Thị Đức Hạnh <a href="tel:0905504477">0905504477</a>
              </p>
              <p>
                Địa chỉ: 53 Lê Thanh Nghị, Hòa Cường Bắc, quận Hải Châu, Đà
                Nẵng.
              </p>
            </Grid.Col>
            <Grid.Col span={width <= 768 ? 12 : 7} className={styles.right}>
              <img src={Contact} alt="" />
            </Grid.Col>
          </Grid>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
