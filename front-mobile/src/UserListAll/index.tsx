import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Alert} from 'react-native';
import { fetchUsers } from '../api';
import Header from '../Header';
import ListModel from '../ListModel';
import { User } from '../types';

function ListUser() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers()
    .then(response => setUsers(response.data))
    .catch(error => Alert.alert('Houve um erro ao buscar os usuários!'));
  }, []);
      
   return (
    <>
      <Header />
      <ScrollView>
        {users.map(user => (          
          <ListModel key={user.id} user={user}/> 
        ))}      
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});

export default ListUser;
