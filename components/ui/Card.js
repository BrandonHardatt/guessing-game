import COLORS from "../../constants/colors";
import { View, StyleSheet } from "react-native";

const Card = ({children}) => {
    return (
        <View style = { styles.card }> 
            {children} 
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 36,
        marginHorizontal: 24,
        borderRadius: 8,
        backgroundColor: COLORS.primary500,
        elevation: 10,
        shadowColor: COLORS.black,
        shadowOffset: { width: 5, height: 5 },
        shadowRadius: 6,
        shadowOpacity: 1
    },
});

export default Card;