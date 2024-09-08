import { View, Text, StyleSheet } from "react-native";
import COLORS from "../../constants/colors";


const InstructionText = ({children, style}) => {

    return (
            <Text style = { [styles.instructionText, style] }> 
                    {children} 
            </Text>    
    );
}

const styles = StyleSheet.create({
    instructionText: {
        color: COLORS.secondary500,
        fontSize: 18
    }
});


export default InstructionText;