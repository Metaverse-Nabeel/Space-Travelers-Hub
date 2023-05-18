/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import rocketCSS from '../styles/Rocket.module.css';

const Rocket = ({ name, desc, image }) => (
  <section className={rocketCSS.container}>
    <div className={rocketCSS.imgDiv}>
      <img src={image} alt="Rocket_Image" />
    </div>
    <div className={rocketCSS.details}>
      <h3 className={rocketCSS.title}>{name}</h3>
      <p className={rocketCSS.desc}>
        {desc}
      </p>
      <Button variant="primary" size="lg" type="button">Reserve Rocket</Button>
    </div>
  </section>
);

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.array.isRequired,
};

export default Rocket;
