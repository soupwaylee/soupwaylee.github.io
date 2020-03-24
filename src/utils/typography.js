import Typography from "typography"
import theme from "typography-theme-parnassus"
theme.overrideThemeStyles = ({ rhythm }, options) => ({
  "h2,h3,h4,h5,h6": {
    marginTop: rhythm(3/2),
    marginBottom: rhythm(1/4)
  },
  a: {
    boxShadow: "0 0 0 0 currentColor"
  }
 })

const noriegaTypography = new Typography(theme)

if (process.env.NODE_ENV !== 'production') {
  noriegaTypography.injectStyles();
}

export default noriegaTypography
export const rhythm = noriegaTypography.rhythm
