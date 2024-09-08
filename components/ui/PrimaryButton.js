import { View, Text, Pressable, StyleSheet } from "react-native";
import COLORS from "../../constants/colors";

const PrimaryButton = ({ children, onPress }) => {

    const getButtonStyle = ({ pressed }) => 
        pressed 
            ? [styles.buttonInnerContainer, styles.buttonPressed]
            : styles.buttonInnerContainer;

    return (
        <View style = {styles.buttonOuterContainer}>
            <Pressable 
                style = {getButtonStyle}
                onPress = {onPress} 
                android_ripple = {COLORS.primary600}
            >
                <Text style = { styles.buttonText }> { children } </Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden'
  },
  buttonInnerContainer: {
    backgroundColor: COLORS.primary600, 
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2
  },
  buttonText: {
    color: COLORS.white,
    textAlign: 'center'
  },
  buttonPressed: {
    opacity: 0.75
  }
});
