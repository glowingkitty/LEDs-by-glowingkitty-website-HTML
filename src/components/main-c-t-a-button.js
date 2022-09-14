import React from 'react'

import PropTypes from 'prop-types'

import './main-c-t-a-button.css'

const MainCTAButton = (props) => {
  return (
    <div className={`main-c-t-a-button-container ${props.rootClassName} `}>
      <button className="main-c-t-a-button-button button">
        {props.header_cta}
      </button>
    </div>
  )
}

MainCTAButton.defaultProps = {
  header_cta: 'Explore products',
  rootClassName: '',
}

MainCTAButton.propTypes = {
  header_cta: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default MainCTAButton
