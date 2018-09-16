import React from 'react'
import { SiteData } from 'react-static'
import { withSiteData } from 'react-static'
//


export default withSiteData(() => (
  <SiteData render={({ siteTitle, metaDescription }) => (
  <div>
    <h1 style={{ textAlign: 'center' }}>Welcome to { siteTitle }</h1>
    <p style={{ textAlign: 'center' }}>{ metaDescription }</p>
  </div>
)}/>
))
