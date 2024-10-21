import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Friends from './Friends';
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalFriendsCount,
  toggleIsFetching,
} from '../../redux/friendlist-reducer';
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';


class FriendsContainer extends React.Component {
  componentDidMount() {
    console.log('Компонент монтируется, загружаем пользователей для страницы:', this.props.currentPage);
    this.fetchUsers(this.props.currentPage);
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentPage !== prevProps.currentPage) {
      console.log('Текущая страница изменена, загружаем пользователей для новой страницы:', this.props.currentPage);
      this.fetchUsers(this.props.currentPage);
    }
  }

  fetchUsers = (page) => {
    console.log('Запрос пользователей для страницы:', page);
    this.props.toggleIsFetching(true);  
    
    usersAPI.getUsers(this.props.currentPage, this.pageSize )
    .then((data) => {
        console.log('Полученные пользователи:', data.items);
        this.props.setUsers(data.items);
        this.props.setTotalFriendsCount(data.totalCount);
      })
      .catch((error) => {
        console.error('Ошибка при загрузке пользователей:', error);
      })
      .finally(() => {
        this.props.toggleIsFetching(false);  // Установка isFetching в false
      });
  };

  handlePageClick = (page) => {
    if (this.props.currentPage !== page) {
      console.log('Обновляем текущую страницу на:', page);
      this.props.setCurrentPage(page);
      this.fetchUsers(page);
    }
  };

  render() {
    const { friends, pageSize, currentPage, follow, unfollow, totalFriendsCount, isFetching } = this.props;

    console.log('Отображаемые друзья:', friends);
    console.log('Состояние isFetching:', isFetching);  // Логирование состояния isFetching

    return (
      <>
        {isFetching && <Preloader />}  {/* Условие для отображения Preloader */}
        <Friends
          friends={friends}
          totalFriendsCount={totalFriendsCount}
          pageSize={pageSize}
          currentPage={currentPage}
          follow={follow}
          unfollow={unfollow}
          onPageClick={this.handlePageClick}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  friends: state.friendlistPage.friends,
  pageSize: state.friendlistPage.pageSize,
  currentPage: state.friendlistPage.currentPage,
  totalFriendsCount: state.friendlistPage.totalFriendsCount,
  isFetching: state.friendlistPage.isFetching,
});

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalFriendsCount,
  toggleIsFetching,
})(FriendsContainer);
