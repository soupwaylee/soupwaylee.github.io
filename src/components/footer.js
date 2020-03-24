import React from "react"
import { Linkedin, GitHub, Instagram, Twitter } from "react-feather"
import footerStyles from "../components/footer.module.css"


const Footer = () => (
  <footer className={footerStyles.footerContainer}>
    <div className={footerStyles.socialMediaIconContainer}>
      <div className={footerStyles.socialMediaIcon}>
        <a href="https://www.linkedin.com/in/soupwaylee">
          <Linkedin/>
        </a>
      </div>
      <div className={footerStyles.socialMediaIcon}>
        <a href="https://github.com/soupwaylee">
          <GitHub/>
        </a>
      </div>
      <div className={footerStyles.socialMediaIcon}>
        <a href="http://instagram.com/soupwaylee">
          <Instagram/>
        </a>
      </div>
      <div className={footerStyles.socialMediaIcon}>
        <a href="https://twitter.com/soupwaylee">
          <Twitter/>
        </a>
      </div>
    </div>
    <div>
    &copy; 2016 - 2020 Stefan Su 
    </div>
  </footer>
)

export default Footer