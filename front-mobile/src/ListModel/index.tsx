import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

function model() {
   var sample = 'id:' + '\n'+ 'nome:' + '\n' + 'usuário:'
                + '\n' + 'senha:' + '\n' + 'email:' 
                + '\n'  + 'classificação:';
      
   return (
    <>   
        <View style={styles.container}>         
            <TextInput 
            style={styles.input}          
            multiline
            value = {sample}
            editable = {false}
            />          
        </View>    
    </>
  );
}

const styles = StyleSheet.create({
  container: {            
    flex: 1, 
    paddingHorizontal: 10,
    paddingTop: 15,  
    alignItems: 'center'
  },
  input:{
    borderWidth: 1,
    borderColor: '#777',
    padding: 5,    
    width: '100%',
    marginBottom: 20,     
    fontSize: 17,
    color: 'black'
    
  }  
});

export default model;
