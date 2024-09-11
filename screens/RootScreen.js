import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';  // Import splash screen package
import { useState, useEffect } from 'react';

// Prevent the splash screen from hiding automatically
SplashScreen.preventAutoHideAsync();

const RootScreen = ({children}) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'open-sans': require('../assets/fonts/OpenSans-Regular.ttf'),  // Replace with your font file
      'open-sans-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
    });
  };

  useEffect(() => {
    const prepare = async () => {
      try {
        await loadFonts(); // Load fonts
        setFontsLoaded(true);
      } catch (e) {
        console.warn(e);
      } finally {
        // Hide splash screen when fonts are loaded
        await SplashScreen.hideAsync();
      }
    };

    prepare();
  }, []);

  if (!fontsLoaded) {
    return null;  // Render nothing while fonts are loading
  }

  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.screen}>
      <ImageBackground 
        source={require('../assets/images/background.png')}
        style={styles.screen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.children}>
          {children}
        </SafeAreaView>  
      </ImageBackground>
    </LinearGradient>
  ); 
};

export default RootScreen;


const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15
  },
  children: {
    flex: 1,
    marginTop: 100,
  }
});
