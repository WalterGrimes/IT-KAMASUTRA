import { connect } from 'react-redux';
import Friends from './Friends';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setUsersTotalCountAC } from '../../redux/friendlist-reducer';

const mapStateToProps = (state) => ({
  friends: state.friendlistPage.friends,
  pageSize: state.friendlistPage.pageSize,
  totalFriendsCount: state.friendlistPage.totalFriendsCount,
  currentPage: state.friendlistPage.currentPage,
  isFetching: state.friendlistPage.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  follow: (userId) => dispatch(followAC(userId)),
  unfollow: (userId) => dispatch(unfollowAC(userId)),
  setUsers: (users) => dispatch(setUsersAC(users)),
  setCurrentPage: (pageNumber) => dispatch(setCurrentPageAC(pageNumber)),
  setTotalFriendsCount: (totalCount) => dispatch(setUsersTotalCountAC(totalCount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Friends);
