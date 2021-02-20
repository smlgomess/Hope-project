import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { User } from '../types';

type Props = {
  user: User;
}


function model({ user }: Props) {
   var modelo = 'id: ' + user.id + '\n'+
                'nome: ' + user.name + '\n' + 
                'usuário:' + user.nickname  + '\n' +
                'senha:' + user.password+ '\n' + 
                'email:' + user.email + '\n'  + 
                'classificação:' + user.email;
      
   return (
    <>   
        <View style={styles.container}>         
            <TextInput 
            style={styles.input}          
            multiline
            value = {modelo}
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
