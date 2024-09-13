import { Text, View, Alert, Image, StyleSheet } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from 'react'
import Title from "../components/ui/Title";
import COLORS from "../constants/colors";

const GameOverScreen = () => {

    return (
        <View>
            <Title style = { styles.gameOverTitle }> Game Over!  </Title>
            <Image source = {require = '../assets/images/success.png'}/>
        </View>
    );
};
export default GameOverScreen;

const styles = StyleSheet.create({
    gameOverTitle: {
      fontSize: 36,
      color: COLORS.primary500,
      borderColor: COLORS.black
    }
  });