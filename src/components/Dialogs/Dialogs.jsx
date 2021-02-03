import React from "react";
import c from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={c.dialog}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={c.active}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return <div className={c.message}>{props.message}</div>
}

const Dialogs = (props) => {
    let dialogsData = [
        {id:1, name:"Roman"},
        {id:2, name:"Nasty"},
        {id:3, name:"Artur"},
        {id:4, name:"Max"},
        {id:5, name:"TurumPumPum"},
    ]
    let messagesData = [
        {id:1, message:"Hello"},
        {id:2, message:"I am pes"},
        {id:3, message:"You lucky boiiiiiiiiiiiiiii"},
        {id:4, message:"Ahahahahah"},
        {id:5, message:"You suck"},
    ]
    return (
        <div className={c.dialogs}>
            <div className={c.dialogs_item}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name="Artur" id="3"/>
                <DialogItem name="Max" id="4"/>
                <DialogItem name="TurumPumPum" id="5"/>
            </div>
            <div className={c.messages_item}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message="You lucky boiiiiiiiiiiiiiii"/>
                <Message message="Ahahahahah"/>
                <Message message="You suck"/>
            </div>
        </div>
    )
}
export default Dialogs;