const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const UPDATE_FRIENDLIST = 'UPDATE_FRIENDLIST';
const HANDLE_ADD_FRIEND = 'HANDLE_ADD_FRIEND';

const initialState = {
  friends: [],
  pageSize: 5,
  totalFriendsCount: 0,
  currentPage: 1,
  isFetching: false,
};

const friendlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        friends: state.friends.map((u) => (u.id === action.userId ? { ...u, followed: true } : u)),
      };
    case UNFOLLOW:
      return {
        ...state,
        friends: state.friends.map((u) => (u.id === action.userId ? { ...u, followed: false } : u)),
      };
    case SET_USERS:
      return {
        ...state,
        friends: action.users,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalFriendsCount: action.totalUsersCount,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case UPDATE_FRIENDLIST:
      return {
        ...state,
        friends: [...state.friends, { name: action.friend, id: Date.now() }],
      };
    case HANDLE_ADD_FRIEND:
      return state;
    default:
      return state;
  }
};

// Action creators
export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalFriendsCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const updateFriendlistCreator = (friend) => ({ type: UPDATE_FRIENDLIST, friend });
export const handleAddFriend = () => ({ type: HANDLE_ADD_FRIEND });

export default friendlistReducer;
