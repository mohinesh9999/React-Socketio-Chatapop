import  React,{useEffect,useState,useRef} from 'react';
import { View,StyleSheet ,ScrollView} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Text,Item,
    Input, Icon,Left,Right }
 from 'native-base';
 import DeviceInfo from 'react-native-device-info';
 import io from "socket.io-client";

 
const ENDPOINT = "https://eople-task.herokuapp.com/";
// const ENDPOINT = "http://localhost:3000/";
const socket = io(ENDPOINT);

export default function Chat(props){
  const scrollViewRef = useRef();
  const mohi = useRef();
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
    
    const name=props.route.params.name;
    const room=props.route.params.room;
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
  }, [ENDPOINT , props.route.params.room, props.route.params.name]);

  useEffect(()=>{
    socket.on('msg',(msg1)=>{
      setmsgs(msgs=>[...msgs,msg1])
      // msgs.push(msg1)
      console.log(msg1,msgs);
    })
    // mohi._root.scrollToEnd()
    // console.log('object',mohi._root);
    // scrollViewRef.current.scrollToEnd()
    // console.log(scrollViewRef.current.scrollToEnd(),'fvff');
    // alert((msgs[0].text));
  },[])
  
  // useEffect(()=>{
  //     // 0.759999
  //     DeviceInfo.getBatteryLevel().then(batteryLevel => {
  //       setmsg('getBatteryLevel:  ' + JSON.stringify(batteryLevel));
  //       socket.emit('smsg',msg,()=>{setmsg('')})
  //     });
  //     socket.emit('smsg',msg,()=>{setmsg('')})
    
    

  // },[])

  const sm=()=>{
    console.log('object');
    // e.preventDefault();
    if(msg){
      console.log('msg');
      socket.emit('smsg',msg,()=>{setmsg('')})
    }


  }


return(
    <Container>
        {/* <Header /> */}
        <Content >
        <View style={styles.containerMain}>
        
        <ScrollView >
        {msgs.map((m,i)=>m.user==n? (<Button key={i} rounded  style={{alignSelf: 'flex-end'}} onPress={(e)=>alert(m.user)}><Text >{m.text}</Text></Button>)
        :(<Button key={i} rounded success style={{alignSelf: 'flex-start'}} onPress={(e)=>alert(m.user)}><Text>{m.text}</Text></Button>))}
        </ScrollView>
        </View>
        </Content>
        {/* <Footer>
        <Item rounded>
            <Input placeholder='press enter to send message' 
            />
        </Item>
        
        </Footer> */}
        {/* <Text>aa</Text> */}
        <View style={styles.bottomView}>
        <Item rounded>
            <Input placeholder='press enter to send message' value={msg}
            onChangeText={e=>setmsg(e)}
            />
            <Button onPress={sm}>
            <Icon active name='send' />
            </Button>
        </Item>
        </View>
        
        
    </Container>
)

}


const styles = StyleSheet.create({
    containerMain: {
      flex:1,
      flexDirection:'column'
    },
    bottomView: {
      width: '100%',
      height: 50,
      backgroundColor: 'yellow',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      bottom: 0,
    },
    textStyle: {
      color: '#fff',
      fontSize: 18,
    },
  });