import React from 'react';
import { connect } from 'react-redux'; 
import Header from './Header';
import { setAuthFriendData } from '../../redux/auth-reducer';
import { headerAPI } from '../../api/api';

class HeaderContainer extends React.Component {
  componentDidMount() {
    headerAPI.getLogin
      .then((response) => {
        if (response.data.resultCode === 0) {
          const { id, login, email } = response.data.data;
          this.props.setAuthFriendData(id, email, login);
        } else {
          console.warn('Authentication failed:', response.data);
        }
      }).catch((error) => {
        console.error('Error fetching auth data:', error);
      });
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { setAuthFriendData })(HeaderContainer);
