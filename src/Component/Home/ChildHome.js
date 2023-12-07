import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

const ChildHome = () => {
  const handleClick = (amount, e) => {
    e.preventDefault();
    console.log('You clicked submit.');

    const url = `http://localhost:5000/payment/checkout/${amount}`;
    fetch(url, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        items: [
          { amount: amount}
        ]
      })
    }).then(res => {
      if(res.ok) return res.json()
      return res.json().then(json => Promise.reject(json))
    }).then(({url}) => {
      window.location = url
    }).catch(e => {
      console.error(e.error);
    });
  };
  return (
    <section id="hero">
    <div className="content text-center">
        <Container>
          <h1 className="display-4 fw-bold text-center">We Bring Your Events To Life</h1>
          <h2>{/* Add your subtitle here */}</h2>
          <Button id="contact_btn" variant="light" href="#contact" className="text-dark">
             Contact Us
          </Button>

        </Container>
      </div>
    <section className="section3 sm-mt-3">
      <h2 className="text-center my-4 package">Our Package</h2>
      <Container>
        <div className="row d-flex justify-content-center">
          {/* Card 1 */}
          <div className="col-md-3">
            <Card className="shadow-sm mb-3 mt-5 border-0" style={{ maxWidth: '18rem' }}>
              <Card.Header className="bg-transparent border-0 px-2 py-0 price">$300</Card.Header>
              <Card.Body className="text-success">
                <Card.Title className="Business text-center text-dark">Business Fair</Card.Title>
                <Card.Text className="text-start fair">For most businesses event like book fair, craft fair.</Card.Text>
              </Card.Body>
              <Card.Body className="text-success p-2">
                <div className="row d-flex justify-content-center align-items-center">
                  <div className="col-md-2 col-2 col-sm-2 svg text-center d-flex sm-d-block justify-content-center align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="col-md-10 col-10 col-10 col-sm-10">
                    <p className="card-text text-start fair">Limited Space Access</p>
                  </div>
                </div>
              </Card.Body>
              <Card.Footer className="bg-transparent border-0 btn-lg d-flex justify-content-center align-items-center">
              <Button onClick={(e) => handleClick(30000, e)} className="btn btn-success text-white rounded-pill px-5 plan-btn">Choose Plan</Button>
              </Card.Footer>
            </Card>
          </div>

          {/* Card 2 */}
          <div className="col-md-3">
            <Card className="shadow-sm mb-3 mt-5 border-0" style={{ maxWidth: '18rem' }}>
              <Card.Header className="bg-transparent border-0 px-2 py-0 price">$500</Card.Header>
              <Card.Body className="text-success">
                <Card.Title className="Business text-center text-dark">Wedding Basic</Card.Title>
                <Card.Text className="text-start fair">For most businesses event like book fair, craft fair.</Card.Text>
              </Card.Body>
              <Card.Body className="text-success p-2">
                <div className="row d-flex justify-content-center align-items-center">
                  <div className="col-md-2 col-2 col-sm-2 svg text-center d-flex sm-d-block justify-content-center align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="col-md-10 col-10 col-10 col-sm-10">
                    <p className="card-text  text-start fair">Limited Space Access</p>
                  </div>
                </div>
              </Card.Body>
              <Card.Footer className="bg-transparent border-0 btn-lg d-flex justify-content-center align-items-center">
              <Button onClick={(e) => handleClick(50000, e)} className="btn btn-success text-white rounded-pill px-5 plan-btn">Choose Plan</Button>
              </Card.Footer>
            </Card>
          </div>

          {/* Card 3 */}
          <div className="col-md-3 p-0">
            <Card className="p-3 bg-primary m-0 text-white shadow-sm wedding-plus position-relative shadow-lg border-0 rounded-3" style={{ maxWidth: '18rem' }}>
            <Card.Header className="bg-transparent border-0 px-2 py-0 price">$800</Card.Header>
              <Card.Body className="text-success">
                <Card.Title className="Business text-center text-dark">Private Event</Card.Title>
                <Card.Text className="text-white text-start fair">For most businesses event like Birthday parties, Private concerts.</Card.Text>
              </Card.Body>
            <Card.Body className="text-success p-2">
                <div className="row d-flex justify-content-center align-items-center">
                  <div className="col-md-2 col-2 col-sm-2 svg text-center d-flex sm-d-block justify-content-center align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="white" style={{ stroke: 'white' }}>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  </div>
                  <div className="col-md-10 col-10 col-10 col-sm-10">
                    <p className="card-text text-white text-start fair">Limited Space Access</p>
                  </div>
                </div>
              </Card.Body>
              <Card.Footer className="bg-transparent border-0 btn-lg d-flex justify-content-center align-items-center">
              <Button onClick={(e) => handleClick(80000, e)} className="btn btn-success text-white rounded-pill px-5 plan-btn">Choose Plan</Button>
              </Card.Footer>
            </Card>
          </div>

          {/* Card 4 */}
          <div className="col-md-3">
            <Card className="shadow-sm mb-3 mt-5 border-0" style={{ maxWidth: '18rem' }}>
            <Card.Header className="bg-transparent border-0 px-2 py-0 price">$1000</Card.Header>
              <Card.Body className="text-success">
                <Card.Title className="Business text-center text-dark">Big Event</Card.Title>
                <Card.Text className="text-start fair">For  biggest event like Movie launch, Music Events.</Card.Text>
              </Card.Body>
            <Card.Body className="text-success p-2">
                <div className="row d-flex justify-content-center align-items-center">
                  <div className="col-md-2 col-2 col-sm-2 svg text-center d-flex sm-d-block justify-content-center align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="col-md-10 col-10 col-10 col-sm-10">
                    <p className="card-text text-start fair">Limited Space Access</p>
                  </div>
                </div>
              </Card.Body>
              <Card.Footer className="bg-transparent border-0 btn-lg d-flex justify-content-center align-items-center">
              <Button onClick={(e) => handleClick(100000, e)} className="btn btn-success text-white rounded-pill px-5 plan-btn">Choose Plan</Button>


              </Card.Footer>
            </Card>
          </div>
        </div>
      </Container>
    </section>
    </section>
  );
}

export default ChildHome;

