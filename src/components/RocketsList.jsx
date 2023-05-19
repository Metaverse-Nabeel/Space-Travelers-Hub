/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from './Rocket';
import rocketListCSS from '../styles/RocketList.module.css';

const RocketsList = () => {
  const { rockets } = useSelector((state) => state.rockets);

  return (
    <div className={rocketListCSS.wrapper}>
      {
            rockets.map((rocket) => (
              <Rocket key={rocket.id} id={rocket.id} status={rocket.reserved} name={rocket.rocket_name} desc={rocket.description} image={rocket.rocket_image} />
            ))
        }
    </div>
  );
};

export default RocketsList;
