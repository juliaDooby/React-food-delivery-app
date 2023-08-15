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
                <p className="category mb-5">
                  Category: <span>Burger</span>
                </p>
                <button className="addTOCart__btn">Add to Cart</button>
              </div>
            </Col>
            <Col lg="12">
              <div className="tabs d-flex align-items-center gap-5 py-3">
                <h6 clasName="tab__active">Description</h6>
                <h6>Review</h6>
              </div>
              <div className="tab__content">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, deleniti
                  impedit quo exercitationem, dolores quibusdam reiciendis molestiae provident qui
                  ducimus ab consequuntur et assumenda tenetur quis tempore eos iusto voluptas
                  sapiente, eligendi iste! Nemo, commodi illum reprehenderit quibusdam laudantium
                  odit!
                </p>
              </div>

              <div className="tab__form mb-3">
                <div className="review">
                  <p className="user__name mb-0">Jhon Doe</p>
                  <p className="user__email">jhon1@gmail.com</p>
                  <p className="feedback__text">Great product</p>
                </div>

                <div className="review">
                  <p className="user__name mb-0">Jhon Doe</p>
                  <p className="user__email">jhon1@gmail.com</p>
                  <p className="feedback__text">Great product</p>
                </div>

                <div className="review">
                  <p className="user__name mb-0">Jhon Doe</p>
                  <p className="user__email">jhon1@gmail.com</p>
                  <p className="feedback__text">Great product</p>
                </div>
                <form className="form">
                  <div className="form__group">
                    <input type="text" placeholder="Enter your name"></input>
                  </div>

                  <div className="form__group">
                    <input type="text" placeholder="Enter your name"></input>
                  </div>

                  <div className="form__group">
                    <textarea rows={5} type="text" placeholder="Enter your name"></textarea>
                  </div>

                  <button type="submit" className="addTOCart__btn">
                    Submit
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default FoodDetails;
