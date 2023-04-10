import React, {useLayoutEffect, useState, useContext} from 'react'
import { useNavigation } from "@react-navigation/native";
import { View, Text, SafeAreaView, ImageBackground, TextInput, Button, Image, TouchableOpacity } from 'react-native'
import { LoginPage, goBack } from '../assets'
import CustomTextInput from '../components/CustomTextInput'

import { AuthContext } from '../utils/context/AuthContext';

const EnterPassword = () => {
    const navigation = useNavigation();
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState('');
    const {login} = useContext(AuthContext);

    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
    }, []);

    const onChangePassword = (e) => {
        setPassword(e.nativeEvent.text);
    }

    const handleClick = () => {
        console.log(password);
        if (password === '') {
            setAlert('Password is required');
        } else {
            setAlert('');
            console.log("success");
            login();
            navigation.navigate("AppStack", {screen: "Home"});
        }
    }
    
    return (
        <ImageBackground source={LoginPage} className="w-full h-full justify-center flex-1 bg-white" resizeMode='cover'>
            <SafeAreaView className="flex-1">
                    <TouchableOpacity onPress={() => navigation.navigate("Login")} className="absolute left-[7%] top-[10%]">
                        <Image source={goBack} className="w-[35px] h-[35px]" />
                    </TouchableOpacity>
                    
                    <View className="relative m-7 mt-20 ">
                        <CustomTextInput 
                        label="Password" 
                        onChangeEmail={onChangePassword}
                        value={password}
                        secureTextEntry={true}
                        placeholder="Enter your password"
                        />
                        <TouchableOpacity onPress={handleClick} className="flex">
                            <View className="flex flex-row justify-center items-center mt-8 bg-[#FEDB9B] rounded-[11px] border-2 border-solid h-[52px] cursor-pointer">
                                <Text className="text-[24px] text-[#071C03] font-MuktaRegular justify-center items-center">Login</Text>
                            </View>
                        </TouchableOpacity>
                        <Text className='text-[#D21D1D] text-[12px] mt-[25%] ml-[5px] absolute'>{alert}</Text>
                        
                    </View>
            </SafeAreaView>
        </ImageBackground> 
    )
}

export default EnterPassword