import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Friends from './Friends';
import loader from './../../assets/images/loader.gif';

class FriendsAPIComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: false,
      totalCount: 0, // Store total number of users
      error: null, // Store any error message
    };
  }

  componentDidMount() {
    this.fetchUsers(this.props.currentPage);
  }

  fetchUsers(page) {
    this.setState({ loading: true, error: null }); // Reset error on new request
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
      .then(response => {
        console.log('API Response:', response.data); // Debug log
        this.setState({
          users: response.data.items,
          loading: false,
          totalCount: response.data.totalCount, // Update total count
        });
        this.props.setUsers(response.data.items);
        this.props.setTotalFriendsCount(response.data.totalCount);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        this.setState({
          loading: false, // Set loading to false
          error: 'Failed to fetch users. Please try again later.' // Update error message
        });
      });
  }

  handlePageClick = (page) => {
    this.props.setCurrentPage(page);
    this.fetchUsers(page); // Load users for the current page
  };

  render() {
    const { friends, pageSize, currentPage, follow, unfollow, isFetching } = this.props;
    const { users, loading, totalCount, error } = this.state;

    return (
      <>
        {isFetching && <img src={loader} alt="Loading..." />}
        {error && <div style={{ color: 'red' }}>{error}</div>} {/* Display error message if exists */}

        <Friends 
          friends={friends}
          totalFriendsCount={totalCount} // Pass total number of users
          pageSize={pageSize}
          currentPage={currentPage}
          follow={follow}
          unfollow={unfollow}
          users={users} // Pass loaded users
          loading={loading} // Pass loading state
          onPageClick={this.handlePageClick} // Pass page click handler
        />
      </>
    );
  }
}

// Prop types validation
FriendsAPIComponent.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  setUsers: PropTypes.func.isRequired,
  setTotalFriendsCount: PropTypes.func.isRequired,
  follow: PropTypes.func.isRequired,
  unfollow: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  friends: PropTypes.array.isRequired,
};

export default FriendsAPIComponent;
