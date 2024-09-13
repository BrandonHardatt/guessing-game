import RootScreen from './screens/RootScreen';
import StartGameScreen from './screens/StartGameScreen';
import PlayGameScreen from './screens/PlayGameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { useState, useEffect } from 'react';

const SCREENS = {
  START: 'START',
  PLAY: 'PLAY',
  GAME_OVER: 'GAME_OVER',
};

const App = () => {
  const [userNumber, setUserNumber] = useState(undefined);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [currentScreen, setCurrentScreen] = useState(SCREENS.START);

  const handleUserNumber = (userNumber) => {
    setUserNumber(userNumber);
    setGameIsOver(false); // Reset game state when new number is chosen
  };

  const handleGameOver = () => setGameIsOver(true);

  const handleRestartGame = () => {
    setUserNumber(undefined);
    setGameIsOver(true); // Ensure game is considered over when restarting
  };

  // useEffect to handle screen changes based on state
  useEffect(() => {
    if (userNumber === undefined) {
      setCurrentScreen(SCREENS.START);
    } else if (gameIsOver) {
      setCurrentScreen(SCREENS.GAME_OVER);
    } else {
      setCurrentScreen(SCREENS.PLAY);
    }
  }, [userNumber, gameIsOver]);

  let screen, backgroundImage;

  switch (currentScreen) {
    case SCREENS.PLAY:
      screen = <PlayGameScreen validNumber={userNumber} onGameOver={handleGameOver} />;
      break;
    case SCREENS.GAME_OVER:
      screen = <GameOverScreen onRestart={handleRestartGame} />;
      backgroundImage = require('./assets/images/success.png');
      break;
    case SCREENS.START:
    default:
      screen = <StartGameScreen onValidNumber={handleUserNumber} />;
  }

  return (
    <RootScreen backgroundImage={backgroundImage}>
      {screen}
    </RootScreen>
  );
};

export default App;
