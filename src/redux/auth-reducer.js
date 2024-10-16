const SET_FRIEND_DATA = 'SET_FRIEND_DATA';


const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FRIEND_DATA:
      return {
        ...state,
       ...action.data,
       isAuth: true
      };
    
  
 
    default:
      return state;
  }
};

// Action creators
export const setAuthFriendData = (userId,email,login ) => ({ type: SET_FRIEND_DATA, data: {userId,email,login } });

export default authReducer;
