import React from "react"
import profilePic from "./profilePic.jpeg"
import { rhythm } from "../utils/typography"


const ProfileCard = () => (
  <div
    style={{
      display: "flex",
      marginBottom: rhythm(3/2)
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
    <p style={{ maxWidth: 250 }}>
      Personal blog by Stefan Su My thoughts on your screen
    </p>
  </div>
)

export default ProfileCard
