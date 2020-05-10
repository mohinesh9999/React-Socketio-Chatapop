import React, { useState, useEffect, Children } from "react";
import io from "socket.io-client";
import queryString from 'query-string'
import { makeStyles } from '@material-ui/core/styles';
import ScrollToBottom from 'react-scroll-to-bottom'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Info from './Info'




const ENDPOINT = "https://eople-task.herokuapp.com/";
const socket = io(ENDPOINT);


const msglist=[];
function Chat(props) {
  const [response, setResponse] = useState("");
  const [msg, setmsg] = useState("");
  const [msgs, setmsgs] = useState([]);
  const [n,sn]=useState('')
  const [r,sr]=useState('')
  useEffect(() => {
    
    // console.log(socket);
    // socket.on("FromAPI", data => {
    //   setResponse(data.a);
    //   console.log('object',data);
    // });
    
    const {name,room} =queryString.parse(props.location.search)
    console.log(name,room);
    // console.log(data);
    sn(name);
    sr(room);
    socket.emit('join',{name:name,room:room}
    ,(error)=>{if(error){alert(error)}})

    // return () =>{
    //   socket.emit('disconnect');
    //   socket.off()
    // }
  }, [ENDPOINT , props.location.search]);

  useEffect(()=>{
    socket.on('msg',(msg1)=>{
      setmsgs(msgs=>[...msgs,msg1])
      // msgs.push(msg1)
      console.log(msg1,msgs);
    })

  },[])
  
  const sm=(e)=>{
    console.log('object');
    e.preventDefault();
    if(msg){
      console.log('msg');
      socket.emit('smsg',msg,()=>{setmsg('')})
    }

  }
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  const classes = useStyles()
  return (
    <React.Fragment>
    <Container maxWidth="md">
    <div className={classes.root}>
      <Grid container spacing={1}>
      
      <Grid item xl={12}>
      <Info room={r} name={n} messgs={msgs}/>
      <TextField
          id="standard-full-width"
          label="Label"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          
     value={msg} 
    onChange={(e)=>setmsg(e.target.value)}
    onKeyPress={(e)=>e.key==='Enter' ? sm(e) : null} 
        />
      </Grid>
      <Grid item xl={12}>
      
     
    </Grid>
    </Grid>
    </div>
    </Container>
    </React.Fragment>
  );
}

export default Chat;