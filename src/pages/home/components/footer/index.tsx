import { JulyWhite } from "@/assets/images";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { Grid } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import styles from "./index.module.scss";
const Footer: FC = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.wrapper} id="contact">
      <div className={styles.container}>
        <div className="container">
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <div>
                <img src={JulyWhite} alt="" />
                <p className={styles.content}>{t("FOOTER_CONTENT")}</p>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div>
                <h3 className="h-12 text-3xl font-bold text-center text-white lg:h-14 lg:mt-4">
                  {t("PRODUCTS")}
                </h3>
                <div className="flex flex-col items-center justify-center lg:pl-12 xl:pl-20 lg:items-start">
                  <NavLink to="/apartment" className={styles.link}>
                    {t("APARTMENT_FOR_RENT")}
                  </NavLink>
                  <NavLink to="/yoga" className={styles.link}>
                    {t("YOGA")}
                  </NavLink>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} md={3}>
              <div>
                <h3 className="h-12 text-3xl font-bold text-center text-white lg:h-14 lg:mt-4">
                  {t("CONTACT")}
                </h3>
                <div>
                  <div>
                    <div className={styles.contactItem}>
                      <HomeOutlinedIcon />
                      <p>53 Lê Thanh Nghị, Đà Nẵng</p>
                    </div>
                    <div>
                      <a href="tel:02363773377" className={styles.contactItem}>
                        <LocalPhoneOutlinedIcon />
                        <p className={styles.link}>0236 3773 377</p>
                      </a>
                    </div>
                    <div>
                      <a
                        href="mailto:julygroups53@gmail.com"
                        className={styles.contactItem}
                      >
                        <EmailOutlinedIcon />
                        <p className={styles.link}>julygroups53@gmail.com</p>
                      </a>
                    </div>
                    <div className={styles.contactItem}>
                      <AccessTimeOutlinedIcon />
                      <p>7:00 - 20:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} md={3} className={styles.map}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.4464363169122!2d108.21556285016807!3d16.042306844366102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c1da813283%3A0x99c1b65dfacc9083!2zNTMgxJAuIEzDqiBUaGFuaCBOZ2jhu4ssIEhvw6AgQ8aw4budbmcgQuG6r2MsIEjhuqNpIENow6J1LCDEkMOgIE7hurVuZyA1NTAwMDAsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1642917168170!5m2!1sen!2s"
                width={"100%"}
                height={"100%"}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg"
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
