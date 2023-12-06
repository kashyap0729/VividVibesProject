import React from 'react';
import { Carousel, Card} from 'react-bootstrap';
import './Marriages.css';
import marriage1 from '../../assets/marriage1.jpg';
import marriage2 from '../../assets/marriage2.jpg';
import marriage3 from '../../assets/marriage3.jpg';
import marriage4 from '../../assets/marriage4.jpg';
import marriage5 from '../../assets/marriage5.jpg';
import marriage6 from '../../assets/marriage6.jpg';

const Marriages = () => {
    return (
    <div>
    <div className='mar-background'>
    <div className="mar-details">
        <h1>Marriages</h1>
        <p>Vivid Vibes, your dedicated event management partner, specializes in curating unique and personalized weddings. From enchanting venues to bespoke decor and gourmet delights, we orchestrate every detail to craft an unforgettable celebration tailored to your love story. With meticulous planning and creative expertise, we transform your wedding day into a vibrant, personalized masterpiece, allowing you to cherish each moment while we handle the magic behind the scenes. Your love deserves to be celebrated in vivid color, and we are here to bring that vision to life.</p>
    </div>
    <Carousel className="multi-item-carousel">
      {/* First set of three cards */}
      <Carousel.Item>
        <div className="mar-d-flex">
          <Card className='mar'>
            <Card.Img variant="top" className='mar' src={marriage1} />
            <Card.Body>
              <Card.Title>Engagement</Card.Title>
              <Card.Text>Some text about card 1.</Card.Text>
            </Card.Body>
          </Card>
          <Card className='mar'>
            <Card.Img variant="top" src={marriage2} />
            <Card.Body>
              <Card.Title>Wedding Decorations</Card.Title>
              <Card.Text>Some text about card 2.</Card.Text>
            </Card.Body>
          </Card>
          <Card className='mar'>
            <Card.Img variant="top" src={marriage3} />
            <Card.Body>
              <Card.Title>Reception</Card.Title>
              <Card.Text>Some text about card 3.</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Carousel.Item>

    {/*Second set of three cards */}
      <Carousel.Item>
        <div className="mar-d-flex">
          <Card className='mar'>
            <Card.Img variant="top" src={marriage4} />
            <Card.Body>
              <Card.Title>Indian Weddings</Card.Title>
              <Card.Text>Some text about card 1.</Card.Text>
            </Card.Body>
          </Card>
          <Card className='mar'>
            <Card.Img variant="top" src={marriage5} />
            <Card.Body>
              <Card.Title>Church Weddings</Card.Title>
              <Card.Text>Some text about card 2.</Card.Text>
            </Card.Body>
          </Card>
          <Card className='mar'>
            <Card.Img variant="top" src={marriage6} />
            <Card.Body>
              <Card.Title>Destination Weddings</Card.Title>
              <Card.Text>Some text about card 2.</Card.Text>
            </Card.Body>
          </Card>
          </div>
      </Carousel.Item>
      </Carousel>
      </div>
    </div>
    );
  };

export default Marriages;