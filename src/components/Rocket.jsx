/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { useDispatch } from 'react-redux';
import { rocketBooking } from '../redux/rockets/rocketsSlice';
import rocketCSS from '../styles/Rocket.module.css';

const Rocket = ({
  id, name, desc, image, status,
}) => {
  const Dispatch = useDispatch();
  return (
    <section className={rocketCSS.container}>
      <div className={rocketCSS.imgDiv}>
        <img src={image} alt="Rocket_Image" />
      </div>
      <div className={rocketCSS.details}>
        <h3 className={rocketCSS.title}>{name}</h3>
        <p className={rocketCSS.desc}>
          {status
            ? (
              <Badge bg="info">
                Reserved
              </Badge>
            ) : ''}
          {desc}
        </p>
        <Button variant={status ? 'outline-secondary' : 'primary'} size="lg" type="button" onClick={() => Dispatch(rocketBooking(id))}>{status ? 'Cancel Reserve' : 'Reserve Rocket'}</Button>
      </div>
    </section>
  );
};

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.bool,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.array.isRequired,
};

Rocket.defaultProps = {
  status: false,
};

export default Rocket;
