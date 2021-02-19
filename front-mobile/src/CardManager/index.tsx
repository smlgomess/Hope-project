import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Header from '../Header';

function CardManager() {

  const handleOnPress = () => {

  }

  return (
    <>
      <Header />
      <View >
        <Text>TEstando card manager</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {            
      flex: 1, 
      paddingHorizontal: 50,
      paddingTop: 60
  },
  buttonBody:{
    backgroundColor: '#ede1ff',
    padding: 20,
    borderRadius: 7,
    marginTop: 120
  },
  buttonText:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#4406a1',   
  }
});

export default CardManager;
