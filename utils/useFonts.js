import * as Font from 'expo-font';

export default useFonts = async () => 
    await Font.loadAsync({
       MuktaRegular: require('../assets/fonts/Mukta-Regular.ttf'),
       MuktaBold: require('../assets/fonts/Mukta-Bold.ttf'),
})