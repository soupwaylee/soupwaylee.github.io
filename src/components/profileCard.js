import React from "react"
import { Mail, Linkedin, GitHub, Instagram, Twitter } from 'react-feather';

import profileCardStyles from "../components/profileCard.module.css"

const ProfileCard = () => (
   <div className={profileCardStyles.cardContainer}>
    <div>
      <h1>stefan su</h1>
    </div>
    <div className={profileCardStyles.socialMediaIconContainer}>
    <div className={profileCardStyles.socialMediaIcon}>
        <a href="mailto:soupwaylee@gmail.com"> 
          <Mail/>
        </a>
      </div>
      <div className={profileCardStyles.socialMediaIcon}>
        <a href="https://www.linkedin.com/in/soupwaylee"> 
          <Linkedin/>
        </a>
      </div>
      <div className={profileCardStyles.socialMediaIcon}>
        <a href="https://github.com/soupwaylee"> 
          <GitHub/>
        </a>
      </div>
      <div className={profileCardStyles.socialMediaIcon}>
        <a href="http://instagram.com/soupwaylee"> 
          <Instagram/>
        </a>
      </div>
      <div className={profileCardStyles.socialMediaIcon}>
        <a href="https://twitter.com/soupwaylee"> 
          <Twitter/>
        </a>
      </div>
    </div>
  </div>
);

export default ProfileCard;
