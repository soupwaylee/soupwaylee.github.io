import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { rhythm } from "../utils/typography"


const Header = ({ menuLinks }) => (
  <header>
    <div
      style={{
        marginBottom: rhythm(0.75),
      }}
    >
      <div
        style={{
          margin: "0 auto",
          maxWidth: 850,
          paddingTop: rhythm(0.5),
          paddingRight: rhythm(0.75),
          paddingBottom: rhythm(0.5),
          paddingLeft: rhythm(0.75),
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <nav>
          <ul
            style={{
              margin: 0,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {menuLinks.map(link => (
              <li
                key={link.name}
                style={{
                  margin: 0,
                  listStyleType: `none`,
                  padding: `1rem`,
                }}
              >
                <Link
                  style={{
                    color: `black`,
                  }}
                  activeStyle={{
                    borderBottom: `2px solid #e67d65`,
                    color: `#e67d65`,
                  }}
                  to={link.link}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
