import React from 'react';
import { useSelector } from 'react-redux';
import profileCSS from '../styles/MyProfile.module.css';

const MyProfile = () => {
  const { rockets } = useSelector((state) => state.rockets);
  return (
    <>
      <section className={profileCSS.reserveContainer}>
        <h2 className={profileCSS.title}>My Rockets</h2>
        <ul className={profileCSS.reserveRockets}>
          {rockets
            .filter((rocket) => rocket.reserved)
            .map((rocket) => (
              <li className={profileCSS.item} key={rocket.id}>{rocket.rocket_name}</li>
            ))}
        </ul>
      </section>
    </>
  );
};

export default MyProfile;
