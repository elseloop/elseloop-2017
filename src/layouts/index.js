import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Elseloop"
      meta={[
        { name: 'description', content: 'Helping local businesses do great business online. ' },
        { name: 'keywords', content: 'web devlopment, portfolio, frontend, wordpress, javascript, css, portland, oregon' },
      ]}
    />
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
