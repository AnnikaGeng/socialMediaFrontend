import { useNavigation } from "@react-navigation/native";
import React, {useLayoutEffect, useState, useContext} from 'react'
import { View, Text, SafeAreaView, ImageBackground, TextInput, Button, Image, TouchableOpacity } from 'react-native'
import { goBack } from '../assets'
import CustomTextInput from '../components/CustomTextInput'
import { signUP } from "../assets";
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";

import { AuthContext } from '../utils/context/AuthContext';

const SignUp = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [alert, setAlert] = useState('');
    const [confirmAlert, setConfirmAlert] = useState('');
    const {login} = useContext(AuthContext);
    const [name, setName] = useState('');

    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
    }, []);

    const onChangeEmail = (e) => {
        setEmail(e.nativeEvent.text);
    }

    const onChangePassword = (e) => {
        setPassword(e.nativeEvent.text);
    }

    const onChangename = (e) => {
        setName(e.nativeEvent.text);
    }

    const onChangeConfirmPassword = (e) => {
        if (e.nativeEvent.text === password) {
            setConfirmAlert('');
            setConfirmPassword(e.nativeEvent.text);
        } else {
            setConfirmAlert('Password does not match');
        }
    }

    const handleClick = () => {
        if (email === '' || password === '') {
            setAlert('Email and password are required');
        } else if (confirmPassword === '' || confirmPassword !== password) {
            setConfirmAlert('Password does not match');
        }
        else {
            setAlert('');
            console.log("success");
            login();
            navigation.navigate("AppStack", {screen: "Home"});
        }
    }


  return (
    <ImageBackground source={signUP} className="w-full h-full justify-center flex-1 bg-white" resizeMode='cover'>
        <KeyboardAvoidingWrapper>
        <SafeAreaView className="flex-1 justify-center items-center">
            <TouchableOpacity onPress={() => navigation.navigate("Login")} className="absolute left-[7%] top-[10%]">
                <Image source={goBack} className="w-[35px] h-[35px]" />
            </TouchableOpacity>

            <View className="flex m-7 mt-28 bg-[#fff] rounded-[20px] border-2 border-solid h-[90%] w-[85%] items-center">
                <View className="flex flex-col items-left m-4 mt-10">
                    <Text className="text-[#071C03] text-[28px] font-MuktaRegular">Hi please</Text>
                    <Text className="text-[#071C03] text-[28px] font-MuktaRegular">Complete 
                        <Text className="font-MuktaBold"> your profile</Text>
                    </Text>
                    <Text className="text-sm text-[#686868] font-MuktaRegular mt-4">This additional info will help give you more personalized experience</Text>

                    <View className="relative">
                    <CustomTextInput
                        label="What is your name"
                        onChangeEmail={onChangename}
                        value={name}
                        style={{borderRadius: 20}}
                    />

                    <CustomTextInput
                        label="What is your email"
                        onChangeEmail={onChangeEmail}
                        value={email}
                        style={{borderRadius: 20}}
                    />

                    <CustomTextInput
                        label="Set a password"
                        onChangeEmail={onChangePassword}
                        value={password}
                        style={{borderRadius: 20}}
                        secureTextEntry={true}
                    />
                    <Text className='text-[#D21D1D] text-[12px] mt-[63%] ml-[5px] absolute'>{alert}</Text>

                    <CustomTextInput
                        label="Confirm password"
                        onChangeEmail={onChangeConfirmPassword}
                        value={confirmPassword}
                        style={{borderRadius: 20}}
                        secureTextEntry={true}
                    />
                    <Text className='text-[#D21D1D] text-[12px] mt-[93%] ml-[5px] absolute'>{confirmAlert}</Text>
                    </View>
                    
                    <TouchableOpacity onPress={handleClick} className="flex">
                        <View className="flex flex-row justify-center items-center mt-8 bg-[#FEDB9B] rounded-[11px] border-2 border-solid h-[52px] cursor-pointer">
                            <Text className="text-[24px] text-[#071C03] font-MuktaRegular justify-center items-center">Continue</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
        </KeyboardAvoidingWrapper>
    </ImageBackground>
  )
}

export default SignUp