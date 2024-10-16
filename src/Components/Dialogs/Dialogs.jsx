import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css'; // Assuming you have a CSS module for styles


const Dialogs = (props) => {

   let state = props.dialogsPage;
  // store.getState()
  let dialogElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} />);
  let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />);
  let newMessageText = state.newMessageText;
 
 
  let onSendMessageClick = () => {
   props.sendMessage();
   //store.dispatch(handleAddMessageCreator());
 }
 let onNewMessageChange = (e) => {
   let text = e.target.value;
   props.updateNewMessageText(text);
   //props.store.dispatch(updateNewMessageCreator(text));
 }
 
//эти полоски значат что они находятся в 
//DialogsMessage.jsx

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {dialogElements}
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <div><textarea value={ newMessageText} 
                         placeholder='Enter something...'
                         onChange={onNewMessageChange}
                          ></textarea></div>
          
          <div><button onClick={ onSendMessageClick }>Send</button></div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
