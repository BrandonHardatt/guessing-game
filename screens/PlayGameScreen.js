import { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";
import GuessContainer from "../components/game/GuessContainer";
import { generateRandomIntegerExcluding } from "../util/util";
import { audioPlayer } from '../util/audioPlayer';  // Import the audioPlayer

let min = 1;
let max = 99;

const PlayGameScreen = ({ validNumber, onGameOver }) => {
  const [currentGuess, setCurrentGuess] = useState(generateRandomIntegerExcluding(min, max, validNumber));

  // Load sound once when the component mounts
  useEffect(() => {
    const loadSound = async () => {
      try {
        await audioPlayer.load(require('../assets/audio/dice-roll.mp3'));
      } catch (error) {
        console.error('Error loading dice roll sound:', error);
      }
    };

    loadSound();

    return () => {
      audioPlayer.stop();  // Cleanup sound when component unmounts
    };
  }, []);  // Empty dependency array ensures sound is loaded only once

  useEffect(() => {
    if (currentGuess === validNumber) { onGameOver(); }
  }, [currentGuess, validNumber, onGameOver]);
  
  // Function to handle playing the dice roll sound
  const handleRollDice = async () => {
    try {
      await audioPlayer.play();  // Just play the sound, no need to load it again
    } catch (error) {
      console.log('Error playing dice roll sound:', error);
    }
  };

  const handleGuess = () => {
    handleRollDice();  // Play dice roll sound when guessing

    if (currentGuess < validNumber) {
      min = currentGuess;
    } else {
      max = currentGuess;
    }

    const nextGuess = generateRandomIntegerExcluding(min, max, currentGuess);
    setCurrentGuess(nextGuess);

    // Check if the guess is the valid number
    if (Math.abs(min - max) === 2) {
      setCurrentGuess(min + 1);
    }
  };


  return (
    <View style={styles.gameScreen}>
      <Title>Opponent's Guess</Title>
      <Card>
        <InstructionText>The computer has guessed:</InstructionText>
        <GuessContainer>{currentGuess}</GuessContainer>
        <View>
          <PrimaryButton onPress={handleGuess}>
            <FontAwesome5 name="dice" size={24} color="black" />
          </PrimaryButton>
        </View>
      </Card>
    </View>
  );
};

export default PlayGameScreen;

const styles = StyleSheet.create({
  gameScreen: {
    flex: 1,
    padding: 24,
  },
});
