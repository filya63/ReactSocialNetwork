import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
/* import {updateMessageCreator, sendMessageCreator} from './../../../redux/dialogsReducer'; */

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

const AddMessage = (props) => {
    let addMessage = () => {
        props.addMessage();
    }
    let updateMessage = (event) => {
        let updateSymbol = event.target.value;
        props.updateMessageCreator(updateSymbol);
    }
    let newMessage = props.state.newMessage;
    return (
        <div className={s.addpost}>
            <textarea value={newMessage} onChange={updateMessage} placeholder="Напиши сообщение.."></textarea>
            <input onClick={addMessage} type="submit" value="Отправить"></input>
        </div>
    )
}

const Dialogs = (props) => {
    let DialogElements = props.dialogs.DialogsData.map(item => <DialogItem key={item.id} name={item.name} />); // Перебираем через метод MAP(для массивов) все объекты в массиве
    let MessageElements = props.dialogs.MessageData.map(item => <Message key={item.id} message={item.message} />);
    return (
        <section className={s.dialogs}>
            <div className={s.dialogsItem}>
                {DialogElements}
            </div>
            <div className={s.messages}>
                {MessageElements}
            </div>
            <div className={s.addMessage}>
                <AddMessage state={props.dialogs} addMessage={props.addMessage} updateMessageCreator={props.updateMessage} />
            </div>
        </section>
    )
}

export default Dialogs;