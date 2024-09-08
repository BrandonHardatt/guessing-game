import { View, Text, StyleSheet} from "react-native";
import COLORS from "../../constants/colors";
const Title = ({children}) => {

    return (
            <Text style = { styles.title }> 
                    {children} 
            </Text>    
    );
}

export default Title;

const styles = StyleSheet.create({

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.white,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: COLORS.white,
    padding: 12 
  }
});