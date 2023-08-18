import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import CommonSection from '../components/UI/common-selection/CommonSection';
import Helmet from '../components/Helmet/Helmet';

const Checkout = () => {
  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="mb-4">Shipping Adress</h6>
              <form className="checkout__form">
                <div className="form__group">
                  <input type="text" placeholder="Enter your name" />
                </div>
                <div className="form__group">
                  <input type="number" placeholder="Phone number" />
                </div>
                <div className="form__group">
                  <input type="text" placeholder="Country" />
                </div>
                <div className="form__group">
                  <input type="text" placeholder="City" />
                </div>
                28.07!
                <div className="form__group">
                  <input type="number" placeholder="Postal code" />
                </div>
              </form>
            </Col>
            <Col lg="4" md="6"></Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
