import { TextInput, View, Alert, StyleSheet } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from 'react';
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import COLORS from "../constants/colors";
import InstructionText from "../components/ui/InstructionText";

const StartGameScreen = ({ onValidNumber }) => {
    const [enteredNumber, setEnteredNumber] = useState('');
    const handleNumberInput = (userInput) => setEnteredNumber(userInput);
    const handleResetInput = () => { setEnteredNumber(''); }
    
    const handleConfirmInput = () => {
        const number = parseInt(enteredNumber);

        if (isNaN(number) || number <= 0 || number > 99) 
        {
            Alert.alert(
                'Error!', 
                'Please enter a number from 1 to 99.',
                [{text: 'ok', style: "destructive", onPress: handleResetInput}]
            );
        } 
        else
        {
            onValidNumber(number);
        }
    }
    return (
        
        <View style = { styles.startGameScreen }> 
            <Title> Number Guessing Game </Title>
            <Card>
                <InstructionText> Please enter a number from 1 to 99 </InstructionText>
                
                <TextInput
                    inputMode = 'numeric'
                    keyboardType = 'number-pad'
                    style = { styles.numberInput } 
                    maxLength = { 2 } 
                    autoCorrect = { false } 
                    value = { enteredNumber }
                    onChangeText = { handleNumberInput }
                /> 
                
                <View style = { styles.buttonsContainer }>
                    <View style = { styles.buttonContainer }>
                        <PrimaryButton onPress={handleResetInput}> Reset </PrimaryButton>  
                    </View>
                    <View style = { styles.buttonContainer }>
                        <PrimaryButton onPress={handleConfirmInput}> Confirm </PrimaryButton>    
                    </View>
                </View>    
                
            </Card>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  numberInput: { 
    height: 50,
    width: 50,
    fontFamily: 'open-sans-bold',
    fontSize: 32,
    borderBottomColor: COLORS.secondary500,
    borderBottomWidth: 2,
    color: COLORS.secondary500,
    marginVertical: 8,
    textAlign: 'center'
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1
  },
  startGameScreen: { 
    flex: 1,
    alignItems: 'center',
  },
});