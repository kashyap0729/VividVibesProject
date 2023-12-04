import React from 'react';

import { Carousel, Card } from 'react-bootstrap';
import './Marraiges.css';
import party1 from '../../assets/party1.jpeg';
import party2 from '../../assets/party2.jpeg';
import party3 from '../../assets/party3.jpg';

const Marraiges = () => {
    return (
      <div>
        {/*<h2>Video Example</h2>
        <video width="640" height="360" muted autoplay controls >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
    </video>*/}
    

        <Carousel className="multi-item-carousel">
      {/* First set of three cards */}
      <Carousel.Item>
        <div className="d-flex">
          <Card className='mar'>
            <Card.Img variant="top" src={party1} />
            <Card.Body>
              <Card.Title>Card 1</Card.Title>
              <Card.Text>Some text about card 1.</Card.Text>
            </Card.Body>
          </Card>
          <Card className='mar'>
            <Card.Img variant="top" src={party2} />
            <Card.Body>
              <Card.Title>Card 2</Card.Title>
              <Card.Text>Some text about card 2.</Card.Text>
            </Card.Body>
          </Card>
          <Card className='mar'>
            <Card.Img variant="top" src={party3} />
            <Card.Body>
              <Card.Title>Card 3</Card.Title>
              <Card.Text>Some text about card 3.</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="d-flex">
          <Card className='mar'>
            <Card.Img variant="top" src={party1} />
            <Card.Body>
              <Card.Title>Card 1</Card.Title>
              <Card.Text>Some text about card 1.</Card.Text>
            </Card.Body>
          </Card>
          <Card className='mar'>
            <Card.Img variant="top" src={party2} />
            <Card.Body>
              <Card.Title>Card 2</Card.Title>
              <Card.Text>Some text about card 2.</Card.Text>
            </Card.Body>
          </Card>
          <Card className='mar'>
            <Card.Img variant="top" src={party3} />
            <Card.Body>
              <Card.Title>Card 2</Card.Title>
              <Card.Text>Some text about card 2.</Card.Text>
            </Card.Body>
          </Card>
          </div>
      </Carousel.Item>
      </Carousel>
    </div>
    );
  };

export default Marraiges;