import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <h1>{siteTitle}</h1>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `BMI`,
}

export default Header
