import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Header from '../Header';

function CardManager() {

  const navigation = useNavigation();

  const handleOnPressCreate = () => {
    navigation.navigate('CreateCard')
  }

  const handleOnPressViewAll= () => {
    navigation.navigate('ListAllCards')
  }

  const handleOnPressSearch= () => {
    navigation.navigate('UpdateCard')
  }
   

  return (
    <>
      <Header />
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
      }}>  
        <View style={styles.container}>
          <RectButton style={styles.buttonBody} onPress={handleOnPressCreate}>
              <Text style={styles.buttonText}>criar</Text>
            </RectButton>  
          <Text style={{fontSize: 17,}}>Digite o id do card:</Text>
          <View style={{alignItems: 'center'}}>
            <TextInput 
            style={styles.input}
            keyboardType='numeric'/>
          </View>
          
          <RectButton style={styles.buttonBody} onPress={handleOnPressSearch}>
            <Text style={styles.buttonText}>buscar</Text>
          </RectButton> 
          <RectButton style={styles.buttonBody} onPress={handleOnPressViewAll}>
            <Text style={styles.buttonText}>listar todos</Text>
          </RectButton>      
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  container: {            
    flex: 1, 
    paddingHorizontal: 10,
    paddingTop: 80,     
  },
  buttonBody:{
    backgroundColor: '#ede1ff',
    padding: 20,
    borderRadius: 7,
    marginTop: 10,
    marginBottom: 70, 
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
    width: '100%'
  }  
});

export default CardManager;
