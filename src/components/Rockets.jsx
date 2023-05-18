import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FetchRockets from '../redux/rockets/fetchRockets';

const Rockets = () => {
  const { rockets, status, error } = useSelector((state) => state.rockets);
  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(FetchRockets());
  }, [Dispatch]);
  if (status) {
    return true;
  }
  if (error) {
    return 'there is an error';
  }
  return (
    <div className="topContainer">
      {
            rockets.map((rocket) => (
              <section className="Space" key={rocket.id}>
                <div className="img">
                  <img src={rocket.rocket_flickr_images} alt="" />
                </div>
                <div className="details">
                  <h2>{rocket.rocket_name}</h2>
                  <p>
                    <span />
                    {rocket.description}
                  </p>
                  <button className="button" type="button">Reserve</button>
                </div>
              </section>
            ))
        }
    </div>
  );
};

export default Rockets;
