/* eslint-disable @typescript-eslint/no-explicit-any */
import useWidth from "@/hooks/useWidth";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import styles from "./index.module.scss";
import { NavLink } from "react-router-dom";
import { July } from "@/assets/images";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const width = useWidth();

  const handleMenuOpen = () => {
    setAnchorEl(ref.current);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const isMobile = width <= 1024;

  return (
    <div>
      {/* Hamburger Menu for screens below or equal to 1024px */}
      {isMobile && (
        <AppBar ref={ref} position="static" className={styles.wrapper}>
          <Toolbar>
            <Typography variant="h6">
              <NavLink to="/">
                <img src={July} alt="logo" />
              </NavLink>
            </Typography>
            <IconButton
              className={styles.bars}
              sx={{
                ml: "auto",
              }}
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      )}

      {/* Full Navbar for screens above 1024px */}
      {!isMobile && (
        <AppBar
          position="static"
          className={`${styles.wrapper} ${styles.wrapperDesktop}`}
        >
          <Toolbar>
            <Typography variant="h6">
              <NavLink to="/">
                <img src={July} alt="logo" />
              </NavLink>
            </Typography>
            <nav className={styles.mainNav}>
              <ul>
                <li>
                  <a href="/">{t("HOME_PAGE")}</a>
                </li>
                <li>
                  <a href="#about-us">{t("ABOUT_US")}</a>
                </li>
                <li>
                  <a href="#services">{t("SERVICES")}</a>
                </li>
                <li>
                  <a href="#contact">{t("CONTACT_US")}</a>
                </li>
              </ul>
            </nav>
            {/* Empty div to push button to the right */}
          </Toolbar>
        </AppBar>
      )}

      {/* Common Menu for both versions */}
      {isMobile && (
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          classes={{
            paper: "extend-header",
          }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
        >
          <MenuItem className={styles.link} onClick={handleMenuClose}>
            <a href="/">{t("HOME_PAGE")}</a>
          </MenuItem>
          <MenuItem className={styles.link} onClick={handleMenuClose}>
            <a href="#about-us">{t("ABOUT_US")}</a>
          </MenuItem>
          <MenuItem className={styles.link} onClick={handleMenuClose}>
            <a href="#services">{t("SERVICES")}</a>
          </MenuItem>
          <MenuItem className={styles.link} onClick={handleMenuClose}>
            <a href="#contact">{t("CONTACT_US")}</a>
          </MenuItem>
        </Menu>
      )}
    </div>
  );
};

export default Header;
