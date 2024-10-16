const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';  // Removed the extra space

const initialState = {
  posts: [
    { id: 1, message: 'hi, how are you?', LikesCount: 12 },
    { id: 2, message: 'it\'s my first post', LikesCount: 11 }
  ],
  newPostText: '',
  profile: null
}; // Added the missing closing bracket

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: Date.now(),
            message: state.newPostText || 'it-kamasutra.com',
            LikesCount: 0
          }
        ],
        newPostText: ''
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    default:
      return state;
  }
};

// mapStateToProps function
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

// Action Creators
export const handleAddPostCreator = () => ({ type: ADD_POST });
export const updateNewPostTextCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const SetUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });  // Accept profile as argument

export default profileReducer;
