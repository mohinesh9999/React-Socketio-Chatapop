import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ScrollToBottom from 'react-scroll-to-bottom'
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Msgsc from './Msgsc'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(120),
      height: theme.spacing(72),
    },
  },
}));
export default function Info(props){
    const classes = useStyles();

    return(<React.Fragment>
        <p>{props.room}</p>
        <div className={classes.root}>
        {/* <Paper elevation={3} style={{maxHeight: 2000, overflow: 'auto'}} > */}
        <ScrollToBottom>
       {/* <Paper elevation={3} style={{maxHeight: 2000, overflow: 'auto'}} > */}
        <div  style={{backgroundColor: "lightblue",width: "90%",position: "relative"}}><Msgsc name={props.name} messages={props.messgs}/></div>
        </ScrollToBottom>
        {/* </Paper> */}
       {/* </Paper> */}
    </div>
    </React.Fragment>
    )
}