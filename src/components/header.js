import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const StyledNavLink = styled(Link)`
  padding: 3px;
  color: black;
  text-decoration: none;
  &:hover {
    color: #e67d65;
  }
`

const Header = ({ menuLinks }) => (
  <header>
    <div
      style={{
        marginBottom: "1.45rem",
      }}
    >
      <div
        style={{
          margin: "0 auto",
          maxWidth: 850,
          padding: "1.45rem 1.0875rem",
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
                  listStyleType: `none`,
                  padding: `1rem`,
                }}
              >
                <StyledNavLink
                  activeStyle={{
                    // borderBottom: `2px solid #e67d65`,
                    color: `#e67d65`,
                  }}
                  to={link.link}
                >
                  {link.name}
                </StyledNavLink>
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
