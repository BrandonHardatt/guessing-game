import * as Font from 'expo-font';
import { Audio } from 'expo-av'; 
import { Image } from 'react-native';

// Store all assets in an object
const assets = {
  fonts: {
    openSans: require('../../assets/fonts/OpenSans-Regular.ttf'),
    openSansBold: require('../../assets/fonts/OpenSans-Bold.ttf'),
  },
  sounds: {
    diceRoll: require('../../assets/audio/dice-roll.mp3'),
  },
  images: {
    background: require('../../assets/images/background.png'),
  },
};

export const loadAssets = async () => {
  await Font.loadAsync({
    'open-sans': assets.fonts.openSans,
    'open-sans-bold': assets.fonts.openSansBold,
  });

  let diceRollSound = await (new Audio.Sound()).loadAsync(assets.sounds.diceRoll);

  let backgroundImg = Image.resolveAssetSource(assets.images.background); 
  
};
