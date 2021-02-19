import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Header from '../Header';

function CreateUser() {

  const handleOnPress = () => {

  }

  return (
    <>
      <Header />
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
      }}>    
        <View style={styles.container}>
          <ScrollView>
            <Text style={{fontSize: 17,}}>Nome:</Text>
            <View style={{alignItems: 'center',}}>          
              <TextInput style={styles.input}/> 
            </View>
            <Text style={{fontSize: 17,}}>Nome de usuário:</Text>
            <View style={{alignItems: 'center',}}>          
              <TextInput style={styles.input}/> 
            </View>       
            <Text style={{fontSize: 17,}}>Senha:</Text>
            <View style={{alignItems: 'center',}}>          
              <TextInput style={styles.input}/> 
            </View> 
            <Text style={{fontSize: 17,}}>Email:</Text>
            <View style={{alignItems: 'center',}}>          
              <TextInput style={styles.input}/> 
            </View>
            <Text style={{fontSize: 17,}}>Situação:</Text>
            <View style={{alignItems: 'center',}}>          
              <TextInput
              style={styles.input}
              placeholder='Ex: dependente'
              /> 
            </View>
            <RectButton style={styles.buttonBody} onPress={handleOnPress}>
              <Text style={styles.buttonText}>concluir</Text>
            </RectButton> 
          </ScrollView>
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
    marginTop: 20,
    marginBottom: 200, 
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
    padding: 13,
    marginTop: 5,
    width: 380,
    marginBottom: 30, 
  }  
});

export default CreateUser;
