import { View, Text, Pressable, StyleSheet } from "react-native";
import COLORS from "../../constants/colors";

const GuessContainer = ({children}) => {
    
    return (
        <View style = { styles.guessContainer }>
            <Text style = { styles.numberText}>
                { children }
            </Text>
        </View>
    );
}

export default GuessContainer;

const styles = StyleSheet.create({
  guessContainer: {
    borderWidth: 4,
    borderColor: COLORS.secondary500,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    margin: 24,
    borderRadius: 8,
  },
  numberText: {
    color: COLORS.secondary500,
    fontSize: 36,
    fontFamily: 'open-sans',
  }
});