const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const initialState = {
  dialogs: [
    { id: 1, name: 'Walter65' },
    { id: 2, name: 'Soldier3' },
    { id: 3, name: 'Batman84' },
    { id: 4, name: 'Lou32' },
    { id: 5, name: 'Patrick2000' },
    { id: 6, name: 'Butcher' }
  ],
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'I’m Kevin Levrone' },
    { id: 3, message: 'And in this training video' },
    { id: 4, message: 'I’m gonna show you how' },
    { id: 5, message: 'I got the name the Maryland Muscle Tank' }
  ],
  newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: Date.now(),
            message: state.newMessageText
          }
        ],
        newMessageText: ''
      };
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      return {
        ...state,
        newMessageText: action.newText
      };
    }
    default:
      return state;
  }
};

// Action Creators
export const handleAddMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text
});

export default dialogsReducer;
 