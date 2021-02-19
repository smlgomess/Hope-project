import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Header from '../Header';

function Home() {
  const navigation = useNavigation();

  const handleOnPressUser = () => {
    navigation.navigate('UserMng')
  }

  const handleOnPressCard = () => {
    navigation.navigate('CardMng')
  }

  return (
    <>
    <Header />
    <View style={styles.container}>
      <RectButton style={styles.buttonBody} onPress={handleOnPressUser}>
          <Text style={styles.buttonText}>Gerenciar Usuários</Text>
        </RectButton> 
      <RectButton style={styles.buttonBody} onPress={handleOnPressCard}>
        <Text style={styles.buttonText}>Gerenciar Cards</Text>
      </RectButton> 
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {            
    flex: 1, 
    paddingHorizontal: 10,
    paddingTop: 55
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
    fontSize: 22,
    color: '#4406a1',   
  }
});

export default Home;
