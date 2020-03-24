import React from "react"
import { Mail, Linkedin, GitHub, Instagram, Twitter } from "react-feather"
import profilePic from "./profilePic.jpeg"
import { rhythm } from "../utils/typography"

import profileCardStyles from "../components/profileCard.module.css"

const ProfileCard = () => (
  <div
    style={{
      display: "flex",
      marginBottom: rhythm(3 / 2),
    }}
  >
    <img
      src={profilePic}
      alt={`Stefan Su`}
      style={{
        marginRight: rhythm(0.75),
        marginBottom: 0,
        width: rhythm(2),
        height: rhythm(2),
        borderRadius: "20%",
      }}
    />
    <p style={{ maxWidth: 225 }}>
      Stefan Su 
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
    </p>
  </div>
)

export default ProfileCard
