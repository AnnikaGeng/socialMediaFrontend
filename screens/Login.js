import React, {useState, useLayoutEffect, useContext, useCallback} from 'react'
import { View, Text, SafeAreaView, ImageBackground, TextInput, Button, Image, TouchableOpacity } from 'react-native'
import { LoginPage, google, facebook, next, smNext } from '../assets'
import CustomTextInput from '../components/CustomTextInput'
import { useNavigation } from "@react-navigation/native";
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';
import { AuthContext } from '../utils/context/AuthContext';

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailAlert, setEmailAlert] = useState('');
    const [passwordAlert, setPasswordAlert] = useState('');
    const {login} = useContext(AuthContext);

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

    const handleClick = () => {
        if (email === '') {
          setEmailAlert('Email is required');
        } else if (password === '') {
          setPasswordAlert('Password is required');
        } else {
          setPasswordAlert('');
          setEmailAlert('');
        //   console.log("success");
          login(email, password)
            .then((response) => {
            //   console.log(response);
              if (response.statusCode === 200) {
                // console.log('Login success!');
                navigation.navigate('AppStack', { screen: 'Home' });
              } else if (response.statusCode === 403) {
                // console.log('Login failed!');
                setPasswordAlert('Wrong email or password!');
                // navigation.replace('Login');
              } else {
                // console.log('Login failed!');
                setPasswordAlert('Login failed, try again later');
              }
            })
            .catch((err) => {
              console.log('Login failed!');
              setPasswordAlert('Login failed!');
              // show an error message to the user
            });
        }
      }
      

    return (
        
        <ImageBackground source={LoginPage} className="w-full h-full justify-center flex-1 bg-white" resizeMode='cover'>
            <KeyboardAvoidingWrapper>
            <SafeAreaView className="flex-1">
                <View className="m-7 mt-20">
                    <Text className="text-[32px] text-[#071C03] font-MuktaRegular leading-normal">Let't Start join HerSphere 
                        <Text className="font-MuktaBold"> Community</Text> 
                    </Text>
                    <Text className="text-sm text-[#686868] font-MuktaRegular mt-4">Connect with each other, share interests and experiences, and build relationships</Text>
                    <View className="relative">
                    <CustomTextInput 
                    label="Email" 
                    onChangeEmail={onChangeEmail}
                    value={email}
                    placeholder="Enter your email"
                    />
                    {/* <TouchableOpacity onPress={handleClick} className="absolute left-[82%] top-[40%] py-2 px-4">
                        <Image 
                        source={smNext} 
                        className="w-[30px] h-[30px]"
                        />
                    </TouchableOpacity> */}
                    <Text className='text-[#D21D1D] text-[12px] mt-[25%] ml-[5px] absolute'>{emailAlert}</Text>

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
                    <Text className='text-[#D21D1D] text-[12px] mt-[50%] ml-[5px] absolute'>{passwordAlert}</Text>
                    
                    </View>
            
                    {/* <Text className="text-sm text-[#071C03] font-MuktaRegular mt-8 text-center">Or continue with</Text> */}

                    {/* <View className="flex flex-row justify-left items-center mt-8 bg-[#FEDB9B] rounded-[11px] border-2 border-solid h-[52px] cursor-pointer pl-10">
                        <Image source={google} className="w-6 h-6"/>
                        <Text className="text-[16px] text-[#071C03] font-MuktaRegular ml-2 justify-center items-center">Continue with Google</Text>
                    </View>

                    <View className="flex flex-row justify-left items-center mt-4 bg-[#C0BFF9] rounded-[11px] border-2 border-solid h-[52px] cursor-pointer pl-10">
                        <Image source={facebook} className="w-6 h-6"/>
                        <Text className="text-[16px] text-[#071C03] font-MuktaRegular ml-2 justify-center items-center">Continue with Facebook</Text>
                    </View> */}

                    <TouchableOpacity activeOpacity={.9}  onPress={() => {
                        navigation.navigate('SignUp')
                    }}>
                    <View className="flex flex-row justify-center items-center mt-20 bg-[#fff] border-2 border-solid h-[119px] rounded-[11px]">
                        <View className="basis-3/4 pl-10">
                            <Text className="text-lg text-[#071C03] font-MuktaBold">Sign Up</Text>
                            <Text className="text-sm text-[#686868] font-MuktaRegular">Don't have an account?</Text>
                        </View>
                        <View className="basis-1/4">
                            <Image source={next} className="w-[51px] h-[51px]"/>
                        </View>
                    </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            </KeyboardAvoidingWrapper>
        </ImageBackground> 
        
  )
}

export default Login