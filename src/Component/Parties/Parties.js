import './Parties.css';
import React from 'react';
import { Carousel, Card, Button} from 'react-bootstrap';
import party1 from '../../assets/party1.jpeg';
import party2 from '../../assets/party2.jpeg';
import party3 from '../../assets/party3.jpg';
import party4 from '../../assets/party4.jpg';
import anniversary from '../../assets/anniversary.jpg';
import retirement from '../../assets/retirement.jpg';
import party5 from '../../assets/party5.jpg';
import party6 from '../../assets/party6.jpg';

const ExampleCarouselImage = ({ imageUrl, altText }) => (
    <img className="d-block w-100" src={imageUrl} alt={altText} />
);
  
function Parties() {
    return(
        <>
        <Carousel className='party'>
          <Carousel.Item interval={1000} className='party'>
            <ExampleCarouselImage imageUrl={party1} className="party"
            altText="First slide" style={{ height: '300px'}}/>
            <Carousel.Caption className='party-caption'>
                <h3>Parties</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={1000} className='party'>
            <ExampleCarouselImage imageUrl={party2} className="party"
            altText="First slide" style={{ height: '300px' }} />
            <Carousel.Caption className='party-caption'>
                <h3>Parties</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={1000} className='party'>
            <ExampleCarouselImage imageUrl={party3} className="party"
            altText="First slide" style={{ height: '300px' }}/>
            <Carousel.Caption className='party-caption'>
                <h3>Parties</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={1000} className='party'>
            <ExampleCarouselImage imageUrl={party5} className="party"
            altText="First slide" style={{ height: '300px' }}/>
            <Carousel.Caption className='party-caption'>
                <h3>Parties</h3>
            </Carousel.Caption>
          </Carousel.Item>
    </Carousel>

    {/* Card Layout */}
    <div className="card-container">
        <Card className='party'>
          <Card.Img variant="top" src={party4} alt="Card image cap" className='party-top'/>
          <Card.Body>
            <Card.Title className='party'>Birthday Parties</Card.Title>
            <Card.Text className='party'>
            Elevate your birthday celebrations with Vivid Vibes! Our expert event management team turns your vision into reality, crafting unforgettable and personalized birthday parties that leave a lasting impression.
            </Card.Text>
            <Button variant="primary">Book Now</Button>
          </Card.Body>
        </Card>
    <Card className='party'>
      <Card.Img variant="top" src={anniversary} alt="Card image cap" className='party-top'/>
      <Card.Body>
        <Card.Title className='party'>Anniversary Parties</Card.Title>
        <Card.Text className='party'>
        Celebrate love and milestones with Vivid Vibes! Transform your anniversaries into cherished memories with our dedicated event management team, specializing in crafting unique and romantic experiences tailored to your preferences.
        </Card.Text>
        <Button variant="primary">Book Now</Button>
      </Card.Body>
    </Card>

    <Card className='party'>
      <Card.Img variant="top" src={retirement} alt="Card image cap" className='party-top'/>
      <Card.Body>
        <Card.Title className='party'>Retirement Parties</Card.Title>
        <Card.Text className='party'>
        Bid farewell in style with Vivid Vibes!. Let us create a memorable and heartwarming event as you embark on this new chapter. Our team ensures a personalized touch to honor the retiree and create an unforgettable celebration.
        </Card.Text>
        <Button variant="primary">Book Now</Button>
      </Card.Body>
    </Card>

    <Card className='party'>
      <Card.Img variant="top" src={party6} alt="Card image cap" className='party-top'/>
      <Card.Body>
        <Card.Title className='party'>Customizable Parties</Card.Title>
        <Card.Text className='party'>
        Vivid Vibes offers endless possibilities. Tailors your event to perfection, whether it's a themed extravaganza or an intimate gathering. Our expert planners work closely with you to bring your vision to life.
        </Card.Text>
        <Button variant="primary">Book Now</Button>
      </Card.Body>
    </Card>

  </div>
    </>
    )
}

export default Parties;