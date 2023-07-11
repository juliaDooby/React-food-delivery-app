import React from 'react';

import Helmet from '../components/Helmet/Helmet.js';
import { Container, Row, Col } from 'reactstrap';

import heroImg from '../assets/images/hero.png';
import '../styles/hero-section.css';
import { Link } from 'react-router-dom';
import Category from '../components/UI/category/Category.jsx';

const Home = () => {
  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Easy way to make an order</h5>
                <h1 className="mb-4 hero__title">
                  <span>
                    HUNGRY?
                    <span>
                      Just wait <br />
                      food at
                    </span>
                    your door
                  </span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolorum amet
                    illo voluptas, accusamus soluta!
                  </p>
                  <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                    <button clasName="order__btn d-flex align-items-center justify-content-between">
                      Order now<i class="ri-arrow-right-s-line"></i>
                    </button>
                    <button className="all__foods-btn">
                      <Link to="/foods">See all foods</Link>
                    </button>
                    <div className=" hero__service d-flex align-items-center gap-5 mt-5">
                      <p className="d-flex align-items-center gap-2">
                        <span className="shipping__icon">
                          <i class="ri-car-line"></i>
                          No shipping charge
                        </span>
                      </p>
                      <p className="d-flex align-items-center gap-2">
                        <span className="shipping__icon">
                          <i class="ri-shield-check-line"></i>
                          100% secure checkout
                        </span>
                      </p>
                    </div>
                  </div>
                </h1>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Category />
      </section>
    </Helmet>
  );
};

export default Home;
