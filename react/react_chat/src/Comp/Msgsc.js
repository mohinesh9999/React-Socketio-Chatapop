import React,{useState, useRef,useEffect } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom'
import M from './M'
import List from '@material-ui/core/List';
var ScrollArea = require('react-scrollbar');
export default function Msgsc(props){
    const messagesEndRef = useRef(null)

    // const scrollToBottom = () => {
    //   messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    // }
  
    // useEffect(scrollToBottom, [props.messages]);
    return(
            <ScrollToBottom>
                {props.messages.map((m,i)=> <div key={i}><M  text={m.text} user={m.user} name={props.name}/></div>)}
            </ScrollToBottom> 
            
    )
}