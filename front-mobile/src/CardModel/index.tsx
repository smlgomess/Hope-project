import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

function CardModel() {
   var title = 'Título' ;
   var mainText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc bibendum augue sit amet urna finibus, at faucibus justo bibendum.' ;    
   var imageLink = 'thumb';

   const handleOnPress = () => {
      //abrir o link
  } 

   return (
    <>   
        <View style={styles.container}>  
          <View style={styles.thumbContainer}>
            <Text>{imageLink}</Text>
          </View>      
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{mainText}</Text>
            <RectButton style={styles.buttonBody} onPress={handleOnPress}>
                <Text style={styles.buttonText}>continue vendo</Text>
              </RectButton> 
        </View>    
    </>
  );
}

const styles = StyleSheet.create({
  container: {   
    marginTop: '15%',
    marginLeft: '15%',
    marginRight: '15%',
    marginBottom: '2%',
    padding: 15,
    backgroundColor: '#FFF',
    shadowOpacity: 0.25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 20,
    borderRadius: 10,
    elevation: 5    
  },
  thumbContainer: {   
    marginTop: '2%',
    marginLeft: '2%',
    marginRight: '2%',
    marginBottom: '2%',
    padding: 15,
    backgroundColor: '#FFF',
    shadowOpacity: 0.25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 1,    
    elevation: 2    
  },
  text: {
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 19,
    letterSpacing: -0.24,
    color: '#000',
    fontFamily: 'OpenSans_400Regular',
    textAlign: 'justify'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 25,
    letterSpacing: -0.24,
    color: '#263238',
    fontFamily: 'OpenSans_700Bold',
    textAlign: 'center'
  },
  buttonBody:{
    backgroundColor: '#ede1ff',
    padding: 10,
    borderRadius: 7,
    marginTop: 15,  
  },
  buttonText:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#4406a1',   
  }
});

export default CardModel;
