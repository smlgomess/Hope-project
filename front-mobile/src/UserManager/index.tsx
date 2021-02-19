import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Header from '../Header';

function UserManager() {

  const navigation = useNavigation();

  const handleOnPressCreate = () => {
    navigation.navigate('CreateUser')
  }

  const handleOnPressViewAll= () => {
    navigation.navigate('ListAll')
  }

  const handleOnPressSearch= () => {
    navigation.navigate('UpdateUser')
  }
   

  return (
    <>
      <Header />
      <View style={styles.container}>
      <RectButton style={styles.buttonBody} onPress={handleOnPressCreate}>
          <Text style={styles.buttonText}>Criar</Text>
        </RectButton>  
      <RectButton style={styles.buttonBody} onPress={handleOnPressSearch}>
        <Text style={styles.buttonText}>Buscar</Text>
      </RectButton> 
      <RectButton style={styles.buttonBody} onPress={handleOnPressViewAll}>
        <Text style={styles.buttonText}>Listar Todos</Text>
      </RectButton>      
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
    marginTop: 70
  },
  buttonText:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#4406a1',   
  }
});

export default UserManager;
