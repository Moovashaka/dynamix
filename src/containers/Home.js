import React from 'react'
import { withSiteData } from 'react-static'
//


export default withSiteData(() => (
  <div>
    <h1 style={{ textAlign: 'center' }}>Welcome to</h1>
    <p style={{ textAlign: 'center' }}>Dynamix</p>
    <p>A static single page app, dynamically routed to showcase fruit pages!</p>
  </div>
))
