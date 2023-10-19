import React from 'react'
import videoBg from './judgeBg.mp4'

function JudgeVideo() {
  return (
    <div >
    <video src={videoBg} autoPlay muted width="100%" height="100%"/>
    </div>
  )
}

export default JudgeVideo
