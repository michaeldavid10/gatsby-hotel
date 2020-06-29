/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Global, css } from '@emotion/core'

import Header from './header'

const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          html {
            font-size: 62.5%;
          }
          body {
            font-size: 18px;
            font-size: 1.8rem;
            line-height: 1.5;
            font-family: 'PT Sans', sans-serif;
          }
          h1,
          h2,
          h3 {
            margin: 0;
            line-height: 1.5;
          }
          h1,
          h2 {
            font-family: 'Roboto', serif;
          }
          h3 {
            font-family: 'PT Sans', sans-serif;
          }
          ul {
            list-style: none;
            margin: 0;
            pagging: 0;
          }
        `}
      />
      <Helmet>
        <title>Gatsby Hotel</title>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=PT+Sans:400,700|Roboto:400,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
