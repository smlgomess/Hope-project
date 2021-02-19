import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import Header from '../Header';

function UpdateCard() {
  const [title, onChangeTitle] = React.useState('card.getTitle()');
  const [textBody, onChangeText] = React.useState('card.getText()');
  const [link, onChangeLink] = React.useState('card.getLink()');                                              

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
                value={"card.getID()"}
                editable = {false}  
                /> 
              </View>         
              <Text style={{fontSize: 17,}}>Título:</Text>
              <View style={{alignItems: 'center',}}>          
                <TextInput 
                style={styles.input}      
                value={title}          
                onChangeText={text => onChangeTitle(text)}
                /> 
              </View>
              <Text style={{fontSize: 17,}}>Texto:</Text>
              <View style={{alignItems: 'center',}}>          
                <TextInput 
                  style={styles.input}
                  value={textBody}          
                  onChangeText={text => onChangeText(text)}
                  />                
              </View>       
              <Text style={{fontSize: 17,}}>Link:</Text>
              <View style={{alignItems: 'center',}}>          
                <TextInput 
                  style={styles.input}
                  value={link}          
                  onChangeText={text => onChangeLink(text)}
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

export default UpdateCard;
