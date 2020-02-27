import React from "react"
import { Mail, Linkedin, GitHub, Instagram, Twitter } from 'react-feather';
import profilePic from './profilePic.jpeg'
import { rhythm } from '../utils/typography'

import profileCardStyles from "../components/profileCard.module.css"


const ProfileCard = () => (
   <div className={profileCardStyles.cardContainer}>
    <div>
      <h1 style={{
        marginBottom: rhythm(1),
      }}>
        stefan su
      </h1>
    </div>
    <img
      src={profilePic}
      alt={`Stefan Su`}
      style={{
        marginBottom: rhythm(3 / 4),
        width: rhythm(4),
        height: rhythm(4),
        borderRadius: '50%',
      }}
    />
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
