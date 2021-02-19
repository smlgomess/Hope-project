import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import Header from '../Header';

function UpdateUser() {
  const [nome, onChangeName] = React.useState('client.getName()');
  const [nick, onChangeNick] = React.useState('client.getNickname()');
  const [password, onChangePass] = React.useState('client.getPassword()');
  const [email, onChangeMail] = React.useState('client.getEmail()');
  const [classf, onChangeClassf] = React.useState('client.getClassification()');
                                              

  const handleOnPress = () => {

  }

  return (
    <>
      <Header />
      <ScrollView>
        <TouchableWithoutFeedback onPress={() => {
          Keyboard.dismiss();
        }}>    
          <View style={styles.container}>
              <Text style={{fontSize: 17,}}>ID:</Text>
              <View style={{alignItems: 'center',}}>          
                <TextInput 
                style={styles.input}      
                value={"client.getID()"}
                editable = {false}  
                /> 
              </View>         
              <Text style={{fontSize: 17,}}>Nome:</Text>
              <View style={{alignItems: 'center',}}>          
                <TextInput 
                style={styles.input}      
                value={nome}          
                onChangeText={text => onChangeName(text)}
                /> 
              </View>
              <Text style={{fontSize: 17,}}>Nome de usuário:</Text>
              <View style={{alignItems: 'center',}}>          
                <TextInput 
                  style={styles.input}
                  value={nick}          
                  onChangeText={text => onChangeNick(text)}
                  />                
              </View>       
              <Text style={{fontSize: 17,}}>Senha:</Text>
              <View style={{alignItems: 'center',}}>          
                <TextInput 
                  style={styles.input}
                  value={password}          
                  onChangeText={text => onChangePass(text)}
                  /> 
              </View> 
              <Text style={{fontSize: 17,}}>Email:</Text>
              <View style={{alignItems: 'center',}}>          
                <TextInput 
                  style={styles.input}
                  value={email}          
                  onChangeText={text => onChangeMail(text)}
                  /> 
              </View>
              <Text style={{fontSize: 17,}}>Situação:</Text>
              <View style={{alignItems: 'center',}}>          
                <TextInput 
                  style={styles.input}
                  value={classf}          
                  onChangeText={text => onChangeClassf(text)}
                  /> 
              </View>
              <RectButton style={styles.buttonBody} onPress={handleOnPress}>
                <Text style={styles.buttonText}>atualizar</Text>
              </RectButton> 
              <RectButton style={styles.buttonBody} onPress={handleOnPress}>
                <Text style={styles.buttonText}>apagar</Text>
              </RectButton>         
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {            
    flex: 1, 
    paddingHorizontal: 10,
    paddingTop: 15,
    paddingBottom: 200      
},  
buttonBody:{
  backgroundColor: '#ede1ff',
  padding: 20,
  borderRadius: 7,
  marginTop: 20,  
},
buttonText:{
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 22,
  color: '#4406a1',   
},
input:{
  borderWidth: 1,
  borderColor: '#777',
  padding: 8,
  marginTop: 5,
  width: '100%',
  marginBottom: 30, 
  fontSize: 16,
  color: 'black'
}  
});

export default UpdateUser;
