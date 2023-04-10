import Login from '../../screens/Login';
import EnterPassword from '../../screens/EnterPassword';
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from '../../screens/SignUp';
import AppStack from './AppStack';

const Stack = createNativeStackNavigator();

export default function AuthStack() {

  return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login}  />
            <Stack.Screen name="EnterPassword" component={EnterPassword} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="AppStack" component={AppStack} />
        </Stack.Navigator>
  );
} 
