import React from 'react'
import Card from 'react-bootstrap/Card';

const ListVideo = () => {
  return (


    <div className='BOX'>
         <Card border="dark" style={{ width: '23rem' }}>
        <Card.Header>Channel 02 </Card.Header>
        <Card.Body>
          <Card.Title>AL ARABIA CHANEL Live</Card.Title>
          <Card.Text>
          <iframe width="100%" height="105%" src="https://www.youtube.com/embed/HcC2lbmKH-Q?si=Wie442neOGtXuBaY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
         <p>Al-Arabiya est une chaîne d'information saoudienne, en arabe, lancée le 3 mars 2003 par un émir de la famille royale saoudienne, Bandar ben Sultan ben Abdelaziz Al Saoud, ancien ambassadeur du Royaume</p>
          </Card.Text>
        </Card.Body>
      </Card>


      <Card border="dark" style={{ width: '18rem' }}>
        <Card.Header>Channel 03</Card.Header>
        <Card.Body>
          <Card.Title>SKY NEWS ARABIA</Card.Title>
          <Card.Text>
          <iframe width="100%" height="105%" src="https://www.youtube.com/embed/me1fBxx9wJY?si=trtDIi2_Wf-pkObo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <p>Sky News Arabia est une chaîne de télévision d'information en continu émirati en arabe lancée le 6 mai 2012. La chaîne a pour ambition de concurrencer Al Jazeera et Al-Arabiya.</p>
          </Card.Text>
        </Card.Body>
      </Card>


      <Card border="dark" style={{ width: '18rem' }}>
        <Card.Header>Channel 04</Card.Header>
        <Card.Body>
          <Card.Title>ARABIA HADATH</Card.Title>
          <Card.Text>
          <iframe width="100%" height="105%" src="https://www.youtube.com/embed/5Nenmj6VYaA?si=P-5AUeWG6KW7BMlJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <p>Al-Hadath, littéralement « L’événement », est une chaîne d’information saoudienne interactive qui se concentre sur les événements politiques dans la région arabe</p>
          </Card.Text>
        </Card.Body>
      </Card>


      <Card border="dark" style={{ width: '18rem' }}>
        <Card.Header>Channel 05</Card.Header>
        <Card.Body>
          <Card.Title>BBC NEWS ARABIA</Card.Title>
          <Card.Text>
          <iframe width="100%" height="105%" src="https://www.youtube.com/embed/HxI2TxhhS9A?si=YGcW-YoBAvUqL3iW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <p>BBC News Arabic, est une chaîne d'information en continu britannique arabophone diffusée au Moyen-Orient et en Afrique du Nord par la BBC. Elle a commencé sa diffusion le 11 mars 2008</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ListVideo