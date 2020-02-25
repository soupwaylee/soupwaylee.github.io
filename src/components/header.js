import React from "react"
import { Link } from "gatsby"
import PropTypes from 'prop-types';


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
          <ul style={{ 
            display: "flex", 
            justifyContent: "space-between"
          }}>
            {menuLinks.map(link => (
              <li 
                key={ link.name } 
                style={{
                  listStyleType: `none`,
                  padding: `1rem`,
              }}>
                <Link 
                  style={{ 
                    color: `black`, 
                    textDecoration: `none` 
                  }} 
                  to={ link.link }>
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