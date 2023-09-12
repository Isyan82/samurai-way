import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Massage/Message";
import './Dialogs.css'


const Dialogs = ({data}) => {
    const {dialogs, messages} = data
    const dialogItems = dialogs.map(item => <DialogItem name={item.name} id={item.id} />)
    const messagesItems = messages.map(item => <Message message={item.message}/> )

    return (
        <div className='content dialogs-page'>
            <div className="dialogs">
                {dialogItems}
            </div>
            <div className="messages">
                {messagesItems}
            </div>
        </div>
    )
}
export default Dialogs