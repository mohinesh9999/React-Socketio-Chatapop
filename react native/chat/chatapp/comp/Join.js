import  React,{useEffect,useState} from 'react';
import { StyleSheet , View, SafeAreaView, Alert ,TextInput}
 from 'react-native';
 import { Container, Header, Content, Button, Text ,
    Form, Item, Input, Label} from 'native-base';
export default function Join(props) {
    const [r,sr]=useState('')
    const [n,sn]=useState('')
    // useEffect(()=>{console.log(r)},[r])
    return (
        <Container>
        {/* <Header /> */}
        <Content>
        <View style={{marginTop:'35%',marginRight:'10%',marginLeft:'10%'}}>
        <Item rounded>
            <Input placeholder='username' value={n} onChangeText=
            {(e)=>sn(e)}/>
        </Item>
        <Text></Text>
        <Item rounded>
            <Input placeholder='room id' value={r} onChangeText=
            {(e)=>sr(e)}/>
        </Item>
        </View>
        <Text></Text>
        <View style={{alignSelf: 'center'}}>
        <Button  rounded onPress={() =>{props.navigation.navigate('Chat',
         {
            room: r,
            name: n,
          });}}>
        <Text>Primary</Text>
      </Button>
      </View>
      </Content>
      </Container>
    );
  }