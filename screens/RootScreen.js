import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';

const RootScreen = ({children}) => 
{
    return (
        <LinearGradient colors = {['#4e0329', '#ddb52f']} style = { styles.screen }>
            
            <ImageBackground 
            source={ require('../assets/background.png') }
            style = { styles.screen }
            imageStyle = { styles.backgroundImage }
            >

                <SafeAreaView style = { styles.children }>
                    { children }
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
