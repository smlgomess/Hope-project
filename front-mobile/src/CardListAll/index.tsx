import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import CardModel from '../CardModel';
import Header from '../Header';


function ListCards() {   
      
   return (
    <>
      <Header />
      <ScrollView>
        <CardModel />
        <CardModel />
        <CardModel />
        <CardModel />
        <CardModel />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});

export default ListCards;
