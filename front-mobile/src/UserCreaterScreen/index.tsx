import React from 'react';
import { StyleSheet, Text, View, TextInput,  TouchableWithoutFeedback, Keyboard } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import Header from '../Header';

function CreateUser() {

  const handleOnPress = () => {

  }

  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        <TouchableWithoutFeedback onPress={() => {
          Keyboard.dismiss();
        }}>    
          <View >            
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
    padding: 8,
    marginTop: 5,
    width: '100%',
    marginBottom: 30, 
    fontSize: 16
  }  
});

export default CreateUser;
