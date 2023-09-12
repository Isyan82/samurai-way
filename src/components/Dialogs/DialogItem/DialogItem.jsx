import React from "react";
import { NavLink } from "react-router-dom";


const DialogItem = (props) => {
    const {name, id} = props

    return (
        <div>
            <NavLink to={`/dialogs/${id}`} className="dialogs__item">{name}</NavLink>
        </div>            
    )
}

export default DialogItem
    
