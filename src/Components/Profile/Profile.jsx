import React from 'react';
import { connect } from 'react-redux';
import s from './Profile.module.css';
import Profileinfo from './Profileinfo/Profileinfo'; 
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  const { posts, newPostText } = props;

  return (
    <div className={s.profile}>
      <Profileinfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText
});

export default connect(mapStateToProps)(Profile);
