import React from "react";
import c from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogsItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";



const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(dialog => <DialogsItem key={dialog.id} name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.messages.map(message => <Message key={message.id} message={message.message}/>)
    return (
        <div className={c.dialogs}>
            <div className={c.dialogs_item}>
                {dialogsElements}
            </div>
            <div className={c.messages_item}>
                {messagesElements}
            </div>
        </div>
    )
}
export default Dialogs;