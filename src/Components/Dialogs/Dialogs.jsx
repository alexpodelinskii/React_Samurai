import React from 'react';
import Dialog from './Dialog';
import style from './Dialogs.module.css';
import Message from './Message';

const Dialogs = (props) => {

    let dialogsItem = props.dialogs.map((element) => <Dialog name={element.name} key={element.id} id={element.id} />)

    let messagesItem = props.messages.map((element) => <Message message={element.message} id={element.id} key={element.id} />)

    let newMessage = React.createRef();

    let sendMessage = () => {
        let text = newMessage.current.value;

    };

    return (
        <div className={style.Dialogs}>
            <div className={style.DialogItems}>
                {dialogsItem}
            </div>
            <div className={style.Messages}>
                {messagesItem}
                <textarea ref={newMessage}></textarea>
                <div><button onClick={sendMessage} >Send message</button></div>

            </div>
        </div>
    )
}

export default Dialogs;