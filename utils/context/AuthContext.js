import { View, Text } from 'react-native'
import React, {createContext, useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { BASE_URL } from '../../api/config';


export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [userToken, setUserToken] = React.useState(null);

    const login = (username, password) => {
      return new Promise((resolve, reject) => {
        
        axios.post(`${BASE_URL}/authenticate`, {
          "email": username,
          "password": password
        })
        .then(res => {
          // console.log(res.data);
          if (res.data.token !== null) {
            setIsLoading(true);
            setUserToken(res.data.token);
            AsyncStorage.setItem('userToken', res.data.token);
            setIsLoading(false);
          }
          resolve(res.data);
        })
        .catch(err => {
          console.log(err);
          setIsLoading(false);
          reject(err);
        })
      });
    } 

    const logout = () => {
        setIsLoading(true);
        setUserToken(null);
        AsyncStorage.removeItem('userToken');
        setIsLoading(false);
    }
    
    const isLoggedIn = async () => {
      try{
        setIsLoading(true);
        const token = await AsyncStorage.getItem('userToken');
        if (token !== null){
          setUserToken(token);
        }
        setIsLoading(false);
      } catch(e){
        console.log(e);
      }
    }

    useEffect(() => {
      isLoggedIn();
    }, [])

    return (
        <AuthContext.Provider value={{login, logout, isLoading, userToken}}>
            {children}
        </AuthContext.Provider>
    )  
}