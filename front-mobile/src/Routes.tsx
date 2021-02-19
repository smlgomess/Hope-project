import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';
import Home from "./MainScreen";
import UserManager from './UserManager';
import CardManager from './CardManager';
import CreateUser from './UserCreaterScreen';
import UpdateUser from './UserUpdateScreen';
import ListUser from './UserListAll';
import CreateCard from './CardCreaterScreen';
import ListCards from './CardListAll';
import UpdateCard from './CardUpdateScreen';


const Stack = createStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator
                headerMode = "none"
                screenOptions={{
                    cardStyle:{
                        backgroundColor: '#FFF'
                    }
                }}
            >
                <Stack.Screen name="Home" component={Home}></Stack.Screen>
                <Stack.Screen name="UserMng" component={UserManager}></Stack.Screen>
                <Stack.Screen name="CardMng" component={CardManager}></Stack.Screen>   
                <Stack.Screen name="CreateUser" component={CreateUser}></Stack.Screen>   
                <Stack.Screen name="UpdateUser" component={UpdateUser}></Stack.Screen>   
                <Stack.Screen name="ListAllUsers" component={ListUser}></Stack.Screen>  
                <Stack.Screen name="CreateCard" component={CreateCard}></Stack.Screen>   
                <Stack.Screen name="UpdateCard" component={UpdateCard}></Stack.Screen>   
                <Stack.Screen name="ListAllCards" component={ListCards}></Stack.Screen>  
                
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default Routes;