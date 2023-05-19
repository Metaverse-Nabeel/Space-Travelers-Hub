import React from 'react';
import MyProfileView from '../views/MyProfileView';
import profileCSS from '../styles/MyProfile.module.css';

const ProfileRoute = () => (
  <div className={profileCSS.profileWrapper}>
    <MyProfileView />
  </div>
);

export default ProfileRoute;
