import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <div>
    <h1>{siteTitle}</h1>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `BMI`,
}

export default Header;
