import React,{useState} from 'react';
import ReactEmoji from 'react-emoji';
import './M.css';
export default function M(props){
    let isSentByCurrentUser = false;

    const trimmedName = props.name.trim().toLowerCase();

    if(props.user === trimmedName) {
        isSentByCurrentUser = true;
    }
    return(
        isSentByCurrentUser
      ? (
        <div className="messageContainer justifyEnd">
          <p className="sentText pr-10">{trimmedName}</p>
          <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite">{ReactEmoji.emojify(props.text)}</p>
          </div>
        </div>
        )
        : (
          <div className="messageContainer justifyStart">
            <div className="messageBox backgroundLight">
              <p className="messageText colorDark">{ReactEmoji.emojify(props.text)}</p>
            </div>
            <p className="sentText pl-10 ">{props.user}</p>
          </div>
        )


    )
}