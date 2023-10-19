import React, {useState, useContext, addEventListener} from 'react'
// import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./sidebar.css"
import { Link } from 'react-router-dom'
import './MainBody.css'
// import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Typography } from '@mui/material';


function MainBody() {

  return (
<>
<div id="overview" className="inner-panel" >

    <h2 className="regular dark weight-600 caps inline-block float-left fs-5"  style={{textAlign : 'justify'}}>
       
     OVERVIEW 
        <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />
     </h2>
     <div style={{padding:"20px 0px 20px 0px"}}>
     <h3>Welcome to the ultimate innovation challenge of the year, the Incedo Innovation League - Hackathon 2023!</h3> 
     </div>
    
       <div style={{textAlign : 'justify'}}>
       <p>This exhilarating event brings together brilliant minds from various fields to tackle the most pressing issues of our time.</p> 
       </div>

<p style={{textAlign : 'justify'}}>With three captivating themes - <strong>Designing Digital Enterprises, Building Intelligent Products and Platforms, and Solving Sustainability Challenges</strong>—this year's Hackathon promises to be a platform where technology and creativity converge to shape a better future.&nbsp;</p>
</div>

<div id="prize" className="inner-panel" >

    <h2 className="regular dark weight-600 caps inline-block float-left fs-5"  style={{textAlign : 'justify', padding:"30px 0px 0px 0px"}}>
     <b>PRIZES</b>
        <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />
     </h2>
     <div className='fs-6' style={{padding:"20px 0px 20px 0px", textAlign : 'justify'}}>
     <h5 style={{ color: 'grey' }}>Main Prizes</h5> 
     </div>
    <h5  style={{textAlign : 'justify'}}><b>Grand Prize :</b> <h6 style={{ color: 'grey' }}>USD 10000</h6></h5>
    <Typography component="div">
      <ul style={{textAlign : 'justify'}}>
        <li>The grand prize, reserved for the ultimate champion of the Incedo Innovation League: Global Hackathon, encompasses the following rewards:</li>
        <li>A Cash reward of $10,000.</li>
        <li>We will celebrate your win on multiple social media channels.</li>
        <li>An Exclusive mentoring session with Incedo CTO.</li>
        <li>We will celebrate your win on multiple social media channels.</li>
        <li>An Opportunity to showcase the winning solution at a LinkedIn Live Session hosted by Incedo.</li>
      </ul>
    </Typography>

    <h5  style={{textAlign : 'justify'}}><b>Incedo Champion :</b> <h6 style={{ color: 'grey' }}>USD 5000</h6></h5>
    <Typography component="div">
      <ul style={{textAlign : 'justify'}}>
        <li>One dedicated prize honoring the team or individual whose overall solution demonstrates unparalleled originality, uniqueness, and visionary thinking.</li>
        <li>A Cash reward of $5,000.</li>
        <li>We will celebrate your win on multiple social media channels.</li>
        <li>An Exclusive mentoring session with Incedo CTO.</li>
        <li>An Opportunity to showcase the winning solution at a LinkedIn Live Session hosted by Incedo.</li>
      </ul>
    </Typography>

    <h5  style={{textAlign : 'justify'}}><b>High Potential :</b> <h6 style={{ color: 'grey' }}>USD 3000</h6></h5>
    <Typography component="div">
      <ul style={{textAlign : 'justify'}}>
        <li>The prize will be awarded to the team or individual whose solution demonstrates the greatest potential for success and impact.</li>
        <li>A Cash reward of $3,000.</li>
        <li>We will celebrate your win on multiple social media channels.</li>
        <li>An Exclusive mentoring session with Incedo CTO.</li>
        <li>An Opportunity to showcase the winning solution at a LinkedIn Live Session hosted by Incedo.</li>
      </ul>
    </Typography>
</div>
<div id="rules" class="inner-panel" >

<h2 className="regular dark weight-600 caps inline-block float-left fs-5"  style={{textAlign : 'justify', padding:"20px 0px 0px 0px"}}>
 <b> RULES</b>
    <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />
 </h2>
 
<Typography component="div">
  <ul style={{textAlign : 'justify'}}>
    <li>This is an online hackathon, and you may participate from anywhere.</li>
    <li>Registration is open for both individuals and teams of up to five (5) members. If you would like to join a team, you have two options available: invite friends to form your team or browse registered participants (located in the Teams Tab) and request to join a team.</li>
  <p><b>*Once the Ideation phase ends, you may not join another team.</b></p>
  <li >The hackathon will be held online. The hackathon Ideation phase starts on September 29, 2023, at 12:40 pm PDT and ends on October 16, 2023, at 11:55 pm PDT. Judging Ideation phase with an announcement on October 23, 2023, at 9 am PDT on teams that will move forward to the development phase. The development phase starts on October 23, 2023, at 9 am PDT and ends on November 19, 2023, at 5 pm PDT. Winners will be announced on December 7, 2023, at 9 am PDT.</li>
  <p style={{padding:"20px 0px 20px 0px"}}>In the Ideation phase, your team will be required to submit an idea as specified for this phase. The submissions will undergo evaluation, and to progress to the Development phase, your team must attain a score of 70 points or higher. This score will determine your eligibility to proceed to the next phase.</p>
  </ul>
</Typography>

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

<div id="submission" className="inner-panel" >

    <h2 className="regular dark weight-600 caps inline-block float-left fs-5"  style={{textAlign : 'justify', padding:"30px 0px 0px 0px"}}>
     <b>SUBMISSION GUIDELINE</b>
        <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />
     </h2>
     <div className='fs-6' style={{padding:"20px 0px 20px 0px", textAlign : 'justify'}}>
     <h5 style={{ color: 'grey' }}>Ideation Phase</h5> 
     </div>
     <div className='fs-6' style={{padding:"20px 0px 20px 0px", textAlign : 'justify'}}>
     <h5 style={{ color: 'grey' }}>Please provide a Slide Deck: Seven Areas of Focus</h5> 
     </div>
    <h5  style={{textAlign : 'justify'}}>1. Slide 1</h5>
    <Typography component="div">
      <ul style={{textAlign : 'justify'}}>
        <li>Problem Statement: Clearly define the problem or challenge that your idea aims to address. Provide context and background information to help the judges understand the significance of the problem.</li>
      </ul>
    </Typography>
    <h5  style={{textAlign : 'justify'}}>2. Slide 2</h5>
    <Typography component="div">
      <ul style={{textAlign : 'justify'}}>
        <li>Solution Overview: Present a high-level overview of your proposed solution. Explain how your idea tackles the problem statement and provides a meaningful solution. Highlight the unique aspects or innovative features of your solution.</li>
      </ul>
    </Typography>
    <h5  style={{textAlign : 'justify'}}>3. Slide 3</h5>
    <Typography component="div">
      <ul style={{textAlign : 'justify'}}>
        <li>Value Proposition: Clearly articulate the value and benefits that your solution brings to the target audience or users. Explain how it addresses their pain points or improves their current situation.</li>
      </ul>
    </Typography>
    <h5  style={{textAlign : 'justify'}}>4. Slide 4</h5>
    <Typography component="div">
      <ul style={{textAlign : 'justify'}}>
        <li>Feasible:  How will this be implemented?</li>
        <li>Unique:  How is this different than what is currently in the market (differentiator)?</li>
      </ul>
    </Typography>

    <h5  style={{textAlign : 'justify'}}>5. Slide 5</h5>
    <Typography component="div">
      <ul style={{textAlign : 'justify'}}>
        <li>Impact and Sustainability: Highlight the potential impact of your solution in terms of sustainability and its contribution to the overall theme of the hackathon. Discuss any environmental, social, or economic benefits it may bring.</li>
      </ul>
    </Typography>
    <h5  style={{textAlign : 'justify'}}>6. Slide 6</h5>
    <Typography component="div">
      <ul style={{textAlign : 'justify'}}>
        <li>Team Introduction: Introduce your team members and their roles in the project. Highlight their relevant skills, experiences, or expertise that contribute to the success of your idea.</li>
      </ul>
    </Typography>
    <p>Remember to keep your deck concise, visually appealing, and easy to understand. Use graphics, charts, or diagrams to enhance the presentation and convey your ideas effectively.</p>
    <div className='fs-6' style={{padding:"20px 0px 20px 0px", textAlign : 'justify'}}>
     <h5 style={{ color: 'grey' }}>Development Phase</h5> 
     </div>
     <p>Please provide a pdf or slide deck that includes a short paragraph on each of the 4 areas.</p>
     <Typography component="div">
      <ul style={{textAlign : 'justify'}}>
        <li>Problem Statement: Clearly define the problem or challenge that your solution aims to address. Provide context and background information to help the judges understand the significance of the problem.</li>
        <li>Solution Overview: Describe your solution and how it addresses the problem statement. Explain the key features, functionalities, or innovations that make your solution unique or effective.</li>
        <li>Technical Implementation: Provide details about the technical aspects of your solution. Explain the technologies, frameworks, programming languages, or APIs used in the development process.</li>
      <li>Impact and Benefits: Highlight the potential impact and benefits of your solution. Discuss how it improves the current situation, addresses user needs, or contributes to the overall theme or objectives of the hackathon.</li>
      </ul>
    </Typography>
    <p>Must include a Live Demo:  Please submit availability for the weeks of November 20 & 27.  This can be a web application, mobile app, or any other form of demonstration that showcases the functionality and user experience of your solution.</p>
<p>Code Repository or Source Code: Share the link to your code repository (e.g., GitHub) or provide access to the source code of your solution. This allows the judges to review the code and assess its quality and implementation.</p>
<p>Team Information: Include information about your team members, their roles, and relevant skills. Highlight any unique contributions or expertise that each team member brought to the project.</p>
<p>Remember to adhere to the submission guidelines provided. Pay attention to any specific requirements or limitations regarding file formats, video demos, or documentation. A well-prepared and comprehensive submission increases your chances of success in the hackathon.</p>
<div id="prize" className="inner-panel" >

    <h2 className="regular dark weight-600 caps inline-block float-left fs-5"  style={{textAlign : 'justify', padding:"30px 0px 0px 0px"}}>
     <b>ABOUT INCEDO</b>
        <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />
     </h2>
     <p>Incedo is a technology consulting and services firm that specializes in data and analytics, digital transformation, and technology solutions. Incedo is known for providing services to various industries, including financial services, healthcare, life sciences, communication engineering, and technology.</p>
    <h5  style={{textAlign : 'justify'}}><b>Here are some key points about Incedo:-</b></h5>
    <Typography component="div">
      <ul style={{textAlign : 'justify'}}>
        <li><b>Services:</b> Incedo offers a range of services, including data engineering and analytics, digital product engineering, customer experience management, and emerging technology solutions. They work with clients to help them harness the power of data and technology to improve their business operations and make data-driven decisions.</li>
        <li><b>Industry Focus:</b> Incedo has a strong presence in industries such as financial services, where they help clients with data analytics, risk management, and digital transformation. They also serve clients in healthcare and life sciences, assisting with data management, research and development, and regulatory compliance.</li>
        <li><b>Technology Expertise:</b> Incedo has expertise in various technologies and tools used in data analytics and digital transformation, including big data, cloud computing, artificial intelligence, machine learning, and blockchain.</li>
        <li><b>Global Presence:</b> Incedo has a global presence, with offices and delivery centers in multiple locations worldwide. Their global reach allows them to serve clients across different regions effectively.</li>
        <li><b>Clientele:</b> Incedo has worked with a diverse range of clients, including Fortune 500 companies, startups, and mid-sized enterprises. They collaborate closely with their clients to develop customized solutions that address their specific business needs.</li>
        <li><b>Innovation:</b> The company focuses on innovation and staying at the forefront of technology trends. They often collaborate with clients to develop innovative solutions that can drive business growth and improve efficiency.</li>
      </ul>
    </Typography>
</div>
</div>

</>
  )
}

export default MainBody
