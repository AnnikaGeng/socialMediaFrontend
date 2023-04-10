import React, {useLayoutEffect, useState, useContext} from 'react'
import { useNavigation } from "@react-navigation/native";
import { View, Text, SafeAreaView, ImageBackground, TextInput, Button, Image, TouchableOpacity } from 'react-native'

import { AuthContext } from '../utils/context/AuthContext';

const Home = () => {
    const navigation = useNavigation();
    const {logout} = useContext(AuthContext);

    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: true,
        });
    }, []);

    const handleLogOut = () => {
        logout();
    }

    return (
        <SafeAreaView className="flex-1">
            <View>
                <Text>Home</Text>
                <Button title="log out" onPress={handleLogOut} />
            </View>
        </SafeAreaView>
    )
}

export default Home