import { TailwindProvider } from 'tailwindcss-react-native';
import React, { useState, useEffect, useContext }  from 'react';
import {useFonts} from '../useFonts'
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { ActivityIndicator, View, Text } from 'react-native';

import AuthStack from './AuthStack';
import AppStack from './AppStack';
import {AuthContext} from '../context/AuthContext';


export default function AppNav() {
  const {isLoading, userToken} = useContext(AuthContext)

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <TailwindProvider>
        <NavigationContainer>
          {userToken == null ? <AuthStack /> : <AppStack /> }
        </NavigationContainer>
    </TailwindProvider>
  );
} 
