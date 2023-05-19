import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import { FetchRockets } from '../redux/rockets/rocketsSlice';
import RocketsList from './RocketsList';
import rocketsCSS from '../styles/Rockets.module.css';

const Rockets = () => {
  const { rockets, status, error } = useSelector((state) => state.rockets);
  const Dispatch = useDispatch();
  useEffect(() => {
    if (!(rockets.length)) Dispatch(FetchRockets());
  }, [Dispatch]);
  if (status) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  if (error) {
    return 'there is an error';
  }
  return (
    <div className={rocketsCSS.container}>
      <RocketsList />
    </div>
  );
};

export default Rockets;
