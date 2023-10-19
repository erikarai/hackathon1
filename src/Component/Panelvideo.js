import React from 'react'
import videoBg from './Panel-home.mp4'

function Panelvideo() {
  return (
    <div >
    <video src={videoBg} autoPlay  muted width="100%" height="100%"/>
    </div>
  )
}

export default Panelvideo
