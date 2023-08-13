import React from 'react';
s;
import products from '../assets/fake-data/products';
import { useParams } from 'react-router-dom';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/common-section/CommonSection';
import { Container, Row, Col } from 'reactstrap';

import '../styles/product-details.css';

import productImg from '../assets/images/product_01.1.jpg';

const FoodDetails = () => {
  return (
    <Helmet title="Product__details">
      <CommonSection title="product 01" />

      <section>
        <Container>
          <Row>
            <Col lg="2" md="2">
              <div className="product__images">
                <div className="img__item">
                  <image src={productImg} alt="" className="w-50" />
                </div>

                <div className="img__item">
                  <image src={productImg} alt="" className="w-50" />
                </div>

                <div className="img__item">
                  <image src={productImg} alt="" className="w-50" />
                </div>
              </div>
            </Col>
            <Col lg="4" md="4"></Col>
            <div className="product__main-img">
              <image src={productImg} alt="" className="w-100" />
            </div>
            <Col lg="6" md="6">
              <div className="single__product-content">
                <h2 clasName="product__title mb-3">Pizza with mushroom</h2>
                <p className="product__price">
                  Price: <span>$34</span>
                </p>
                <p>
                  Category: <span>Burger</span>
                </p>
                <button className="addTOCart__btn">Add to Cart</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default FoodDetails;
