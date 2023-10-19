import React from 'react'
import { Typography } from '@mui/material';

function Rules() {
  return (
    <>
    <div id="overview" class="inner-panel" >
    <h2 class="regular dark weight-600 caps inline-block float-left fs-5"  style={{textAlign : 'justify'}}>
     RULES
        <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />
     </h2>
     <div id="rules" class="rulebody" style={{padding:"20px 0px 20px 0px"}} >
     <Typography component="div">
      <ul style={{textAlign : 'justify'}}>
        <li>This is an online hackathon, and you may participate from anywhere.</li>
        <li>Registration is open for both individuals and teams of up to four (4) members. If you would like to join a team, you have two options available: invite friends to form your team or browse registered participants (located in the Teams Tab) and request to join a team.</li>
      </ul>
    </Typography>
    <h2 class="regular dark weight-600 caps inline-block float-left fs-5"  style={{textAlign : 'justify'}}>
    *Once the Ideation phase ends, you may not join another team </h2>
    <Typography component="div">
      <ul style={{textAlign : 'justify'}}>
        <li>The hackathon will be held online. The hackathon Ideation phase starts on September 29, 2023, at 12:40 pm PDT and ends on October 16, 2023, at 11:55 pm PDT. Judging Ideation phase with an announcement on October 23, 2023, at 9 am PDT on teams that will move forward to the development phase. The development phase starts on October 23, 2023, at 9 am PDT and ends on November 19, 2023, at 5 pm PDT. Winners will be announced on December 7, 2023, at 9 am PDT.</li>
      </ul>
    </Typography>
    <p>In the Ideation phase, your team will be required to submit an idea as specified for this phase. The submissions will undergo evaluation, and to progress to the Development phase, your team must attain a score of 70 points or higher. This score will determine your eligibility to proceed to the next phase.</p>
    <Typography component="div">
      <ul style={{textAlign : 'justify'}}>
        <li>There are 3 themes for the hackathon, and participants must submit a hack that falls under one of these themes.</li>
        <li>Participants can submit their hack as many times as they want, and the last hack will be considered as the final submission.</li>
        <li>Participants must come up with new and innovative ideas, and any copied idea will be disqualified.</li>
        <li>The hack must be developed entirely during the Hackathon duration.</li>
        <li>Participants can use freely available systems and open-source libraries.</li>
      </ul>
    </Typography>
     </div>
    </div>
    </>
  )
}

export default Rules
