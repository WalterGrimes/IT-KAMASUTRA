import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import { updateNewMessageCreator, handleAddMessageCreator } from '../../redux/dialogs-reducer';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage 
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageCreator(text));
    },
    sendMessage: () => {
      dispatch(handleAddMessageCreator());
    }
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
