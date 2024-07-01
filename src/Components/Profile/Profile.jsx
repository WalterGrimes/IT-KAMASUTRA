import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';

const Profile = () => {
  return (
  <div className={s.content}>
        <div>
          <img src="https://w0.peakpx.com/wallpaper/15/456/HD-wallpaper-swiss-mountains-valley-nature-landscape-u-16-9-widescreen-background-1096.jpg" alt="Nature" />
        </div>
      <div>
        ava + description
      </div>
      <MyPosts />
    </div>
    )
}

export default Profile;