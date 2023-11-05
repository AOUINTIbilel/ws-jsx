import React from 'react'
import Card from 'react-bootstrap/Card';
import "./ParVideo.css"

const ParVideo = () => {
  return (
    <div className='ParVI'>
      <Card>
      <Card.Header>Al jazeera Live Stream</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            <iframe width="100%" height="600" src="https://www.youtube.com/embed/bNyUyrR0PHo?si=UB2agQ_k-DWJm8Fi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <br></br>
            Al Jazeera live is a globally recognized 24-hour Arabic-language news channel. It operates under the ownership of the Al Jazeera Media Network, which, in turn, funded by the goverment of Qatar. It is the first English-language news channel to be headquartered in Western Asia.{' '}
          </p>
         
        </blockquote>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ParVideo