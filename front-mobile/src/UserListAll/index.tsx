import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Header from '../Header';
import ListModel from '../ListModel';

function ListUser() {   
      
   return (
    <>
      <Header />
      <ScrollView>
        <ListModel />
        <ListModel />
        <ListModel />
        <ListModel />
        <ListModel />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});

export default ListUser;
