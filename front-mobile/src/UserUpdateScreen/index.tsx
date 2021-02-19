import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Header from '../Header';

function UpdateUser() {
  const [value, onChangeText] = React.useState('text field test' + '\n' + 'another test');
  const handleOnPress = () => {

  }

  return (
    <>
    <Header /> 
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
      }}>             
          <View style={styles.container}>         
              <TextInput 
              style={styles.input}          
              multiline
              onChangeText={text => onChangeText(text)}
              value = {value}
              /> 
              <RectButton style={styles.buttonBody} onPress={handleOnPress}>
                <Text style={styles.buttonText}>atualizar</Text>
              </RectButton> 
              <RectButton style={styles.buttonBody} onPress={handleOnPress}>
                <Text style={styles.buttonText}>apagar</Text>
              </RectButton>          
          </View>      
        </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  container: {            
    flex: 1, 
    paddingHorizontal: 17,
    paddingTop: 15,  
  },
  buttonBody:{
    backgroundColor: '#ede1ff',
    padding: 20,
    borderRadius: 7,
    marginTop: 29
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
    padding: 5,
    marginTop: 5,
    width: 380,
    marginBottom: 10, 
    height: 200,
    fontSize: 20
  }  
});

export default UpdateUser;
