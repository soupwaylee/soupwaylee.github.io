import Typography from "typography"
import theme from "typography-theme-parnassus"
import {
  MOBILE_MEDIA_QUERY,
  TABLET_MEDIA_QUERY,
} from "typography-breakpoint-constants"
theme.overrideThemeStyles = ({ rhythm }) => ({
  p: {
    baseFontSize: "17px",
  },
  "h2,h3,h4,h5,h6": {
    marginBottom: rhythm(1/4)
  },
  a: {
    boxShadow: "0 0 0 0 currentColor"
  },
  [MOBILE_MEDIA_QUERY]: {
    html: {
      fontSize: `${(16 / 16) * 100}%`,
    },
  },
  [TABLET_MEDIA_QUERY]: {
    html: {
      fontSize: `${(16 / 16) * 100}%`,
    },
  },
 })

const typography = new Typography(theme)

if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography
export const rhythm = typography.rhythm
