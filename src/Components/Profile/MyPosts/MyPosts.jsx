// MyPosts.jsx
import React from 'react';
import { connect } from 'react-redux';
import Post from './Post/Post';
import { handleAddPostCreator, updateNewPostTextCreator } from '../../../redux/profile-reducer';

const MyPosts = ({ posts, newPostText, updateNewPostText, addPost }) => {
  const onPostChange = (e) => {
    updateNewPostText(e.target.value);
  };

  const onAddPost = () => {
    addPost();
  };

  return (
    <div>
      <div>
        <textarea value={newPostText} onChange={onPostChange} />
        <button onClick={onAddPost}>Add Post</button>
      </div>
      <div>
        {posts.map(post => (
          <Post
            key={post.id}
            message={post.message}
            LikesCount={post.LikesCount}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText
});

const mapDispatchToProps = (dispatch) => ({
  updateNewPostText: (text) => dispatch(updateNewPostTextCreator(text)),
  addPost: () => dispatch(handleAddPostCreator())
});

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
