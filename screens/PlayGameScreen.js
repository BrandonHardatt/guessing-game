import { Text, View, Alert, StyleSheet } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState, useEffect } from 'react'
import Title from "../components/ui/Title";
import { generateRandomIntegerExcluding } from "../util/util";
import GuessContainer from "../components/game/GuessContainer";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { FontAwesome5 } from '@expo/vector-icons';
import { audioPlayer } from '../util/audioPlayer';  // Import the audioPlayer object

let min = 1;
let max = 99;

const PlayGameScreen = ({validNumber, onGameOver}) => {
    

    [currentGuess, setCurrentGuess] = useState(generateRandomIntegerExcluding(min, max, validNumber));
    const handleCurrentGuess = (guess) => setCurrentGuess(guess);

    // Load and play the dice roll sound when the button is pressed
    const handleRollDice = async () => {
        try {
            await audioPlayer.load(require('../assets/audio/dice-roll.mp3'));  // Load the sound file
            await audioPlayer.play();  // Play the loaded sound
        } catch (error) {
            console.log('Error handling dice roll sound:', error);
        }
    };


    const handleGuess = () => {

        handleRollDice();

        (currentGuess < validNumber) ? min = currentGuess : max = currentGuess;

        handleCurrentGuess(generateRandomIntegerExcluding(min, max, currentGuess));

        if ((Math.abs(min - max)) === 2  ) { handleCurrentGuess(min + 1); }

    }

    useEffect(() => { 
        if (currentGuess === validNumber) { onGameOver(); }
    }, 
    [currentGuess, validNumber, onGameOver]);
    

    return (
        <View style = { styles.gameScreen }> 
            <Title>
                Opponents Guess 
            </Title>
            <Card> 
            <InstructionText> The computer has guessed </InstructionText>
                <GuessContainer>
                    { currentGuess }
                </GuessContainer>
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
    padding: 24
  },
});
