import React, { useState } from "react";


function ContactCard(props){
    const {name, picture, email, phone} = props;
    const [buttonText, setButtonText] = useState(false);
    const [isHidden, setHide] = useState(true);

    const onClickHandler = () => {

        setButtonText(!buttonText);
        setHide(!isHidden)
    }

    const text = buttonText ? 'Hide Details' : 'Show Details';

    return(
        <li style={{ listStyle: "none" }}>
            <h4>{name}</h4>
            <img
            style={{ height: "200px" }}
            src={picture} alt="contact"></img>
            <button onClick={onClickHandler}>{text}</button>
            {isHidden ? 
                <div></div> :
                <div>
                    <p>Email: {email}  </p>
                    <p>Phone: {phone}</p>
                 </div>
            }
        </li>
    )
}

export default ContactCard;