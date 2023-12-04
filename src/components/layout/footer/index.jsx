import React from "react";
import styles from "./index.module.css";
import { GithubIcon, GoogleIcon, LinkedinIcon, WhatsappIcon } from "../../../icons";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className={styles.background}>
      <div className={styles.control}>
        <div className={styles.text1}>
          <div className={styles.texth2}>
            <h2>Profile</h2>
          </div>
          <div className={styles.texth3}>
          <h2>FAQ’s</h2>
          <h2>Pricing plans</h2>
          <h2>Order tracking</h2>
          <h2>Returns</h2>
          </div>
        </div>
        <div className={styles.text1}>
          <div className={styles.texth2}>
            <h2>Recent Posts</h2>
          </div>
          <div className={styles.texth3}>
          <h2>Touch of uniqueness</h2>
          <h2>Offices you won’t forget</h2>
          <h2>Cicilan</h2>
          </div>
        </div>
        <div className={styles.text1}>
          <div className={styles.texth2}>
            <h2>CUSTOMER</h2>
          </div>
          <div className={styles.texth3}>
          <h2>Help & contact us</h2>
          <h2>Return</h2>
          <h2>Online stores</h2>
          <h2>Terms & cordition</h2>
          </div>
        </div>
        <div className={styles.text1}>
          <div className={styles.texth2}>
            <h2>Contact</h2>
          </div>
          <div className={styles.texth4}>
            <Link target="_blank" to={"https://www.linkedin.com/in/elcin-abdullayev-583861229/"}>

         <LinkedinIcon/>
            </Link>
            <Link target="_blank" to={"https://wa.me/0507487048"}>

         <WhatsappIcon/>
            </Link>
            <Link target="_blank" to={"https://www.github.com/7u4bgr"}>
         <GithubIcon/>
            </Link>
            <a href="mailto:abdllyevv@gmail.com">
         <GoogleIcon/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
