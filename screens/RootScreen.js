import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';  // Import splash screen package
import { useState, useEffect } from 'react';
import { loadAssets } from '../components/ui/assetLoader';

// Prevent the splash screen from hiding automatically
SplashScreen.preventAutoHideAsync();

const RootScreen = ({children}) => {
  const [appLoaded, setAppLoaded] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        await loadAssets(); // Load fonts
        setAppLoaded(true);
      } catch (e) {
        console.warn(e);
      } finally {
        // Hide splash screen when fonts are loaded
        await SplashScreen.hideAsync();
      }
    };

    prepare();
  }, []);

  if (!appLoaded) {
    return null;  // Render nothing while app is loading
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
