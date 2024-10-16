import React from 'react';
import { connect } from 'react-redux';
import { updateFriendlistCreator, handleAddFriend } from '../../../redux/friendlist-reducer';

const FriendsRequest = (props) => {
  const newFriendRef = React.createRef();

  const onFriendAccept = () => {
    const friend = newFriendRef.current.value;
    if (friend.trim() === '') return;

    const friendExists = props.friends.some((f) => f.name === friend);
    if (friendExists) {
      alert('Этот друг уже добавлен!');
      return;
    }

    props.updateFriendlistCreator(friend);
    props.handleAddFriend();

    newFriendRef.current.value = '';
  };

  return (
    <div>
      <div>
        <h2>Добавить друга:</h2>
        <textarea ref={newFriendRef} />
      </div>
      <button onClick={onFriendAccept}>Добавить друга</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  friends: state.friendlistPage.friends,
});

export default connect(mapStateToProps, { updateFriendlistCreator, handleAddFriend })(FriendsRequest);
