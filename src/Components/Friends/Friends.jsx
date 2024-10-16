import React, { useEffect } from 'react';
import s from './Friends.module.css';
import friendPhoto from '../../assets/images/friend.jpg';
import FriendRequest from './FriendsRequest/FriendsRequest';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Friends = (props) => {
  const { friends = [], users = [], follow, unfollow, totalFriendsCount, pageSize, currentPage, onPageClick } = props;

  // Логируем все пропсы, чтобы увидеть, что передается в компонент
  useEffect(() => {
    console.log('Props:', props);
  }, [props]);

  useEffect(() => {
    console.log('totalFriendsCount:', totalFriendsCount);
    console.log('pageSize:', pageSize);
    console.log('currentPage:', currentPage);
  }, [totalFriendsCount, pageSize, currentPage]);

  if (!totalFriendsCount || !pageSize) {
    console.log('Нет данных для отображения страниц');
    return <div>Нет данных для отображения страниц</div>;
  }

  let pagesCount = Math.ceil(totalFriendsCount / pageSize);
  let pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <div>
      <div>
        <h2>Навигация по страницам:</h2>
        <div className={s.pageNavigation}>
          {pages.map((page) => (
            <span
              key={page}
              className={page === currentPage ? s.selectedPage : s.page}
              onClick={() => onPageClick(page)}
            >
              {page}
            </span>
          ))}
        </div>
      </div>

      <div className={s.friends}>
        <h2>Список друзей</h2>

        <ul className={s.friendList}>
          {friends.length > 0 ? (
            friends.map((friend) => (
              <li key={friend.id} className={s.friendItem}>
                <NavLink to={`/profile/${friend.id}`} className={({ isActive }) => (isActive ? s.activeLink : '')}>
                  <img src={friend.photoUrl || friendPhoto} className={s.friendPhoto} alt={`${friend.name}'s avatar`} />
                  <span>{friend.name}</span>
                </NavLink>
              </li>
            ))
          ) : (
            <div>Друзья не найдены</div>
          )}
        </ul>

        <FriendRequest />
      </div>

      <h2>Пользователи</h2>
      <div className={s.usersList}>
        {/* Если список пользователей есть, отображаем их, если нет - сообщение */}
        {users.length > 0 ? (
          users.map((u) => (
            <div key={u.id} className={s.user}>
              <div className={s.userInfo}>
                <img src={u.photos?.small || friendPhoto} className={s.userPhoto} alt={`${u.name}'s avatar`} />
                <div className={s.userDetails}>
                  <div>{u.name}</div>
                  <div>{u.status || 'Статус не указан'}</div>
                </div>
              </div>
              <button
                className={u.followed ? s.unfollowButton : s.followButton}
                onClick={() => {
                  if (u.followed) {
                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                      withCredentials: true,
                      headers: {
                        'API-KEY': 'c9984965-98ca-41b8-bb84-36ee43794',
                      },
                    })
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          unfollow(u.id);
                        }
                      });
                  } else {
                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                      withCredentials: true,
                      headers: {
                        'API-KEY': 'c9984965-98ca-41b8-bb84-36ee43794',
                      },
                    })
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          follow(u.id);
                        }
                      });
                  }
                }}
              >
                {u.followed ? 'Отписаться' : 'Подписаться'}
              </button>
            </div>
          ))
        ) : (
          <div>Пользователи не найдены</div>
        )}
      </div>
    </div>
  );
};

export default Friends;
