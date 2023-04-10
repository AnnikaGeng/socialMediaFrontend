import React, {useEffect, useState} from 'react';
import AppNav from './utils/navigation/AppNav';
import { AuthContextProvider } from './utils/context/AuthContext';
import useFonts from './utils/useFonts';
import * as SplashScreen from 'expo-splash-screen';



export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  const LoadFonts = async () => {
    await useFonts();
    setIsFontLoaded(true);
  };

  useEffect(() => {
    async function loadFontsAndHideSplash() {
      await LoadFonts();
      SplashScreen.hideAsync();
    }

    SplashScreen.preventAutoHideAsync(); // Prevent the splash screen from hiding automatically
    loadFontsAndHideSplash();
  }, []);


  if (!isFontLoaded) {
    return null; // Render nothing until fonts are loaded
  }

  return (
    <AuthContextProvider>
      <AppNav />
    </AuthContextProvider>
  );
} 
