import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import Header from '../Header';

function ListUser() {
   var var1 = "read only"+'\n'+"read text";
      
   return (
    <>
      <Header />
      <ScrollView>
        <View style={styles.container}>
         
            <TextInput 
            style={styles.input}          
            multiline
            value = {var1}
            editable = {false}/>
          
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {            
    flex: 1, 
    paddingHorizontal: 17,
    paddingTop: 15,  
  },
  input:{
    borderWidth: 1,
    borderColor: '#777',
    padding: 5,
    marginTop: 5,
    width: 380,
    marginBottom: 30, 
    height: 200,
    fontSize: 20
  }  
});

export default ListUser;
