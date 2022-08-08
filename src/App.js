import { useEffect } from "react";
import { Wrapper } from "./Components/Utils/Layout";
import GameOver from "./Components/GameOver/GameOver";
import { GameBody } from "./Components/GameBody/GameBody";
import Status from "./Components/Utils/Status";
import Loading from "./Components/Utils/Loading";
import { GameManager } from "./Components/GameControlFuncs/GameManager";
import Footer from "./Components/Footer/Footer";
import GameHeader from "./Components/GameHeader/GameHeader";

function App() {
  const [
    loading,
    isGameOver,
    cards,
    score,
    bestScore,
    level,
    startTheLevel,
    handleCardClick,
    startNewGame,
  ] = GameManager();

  useEffect(() => {
    async function temp() {
      await startTheLevel();
    }
    temp();
  }, [level]);
  console.log("Current level is " + level.currentLvl);
  return (
    <Wrapper>
      <Loading text={`Loading Lvl ${level.currentLvl}`} show={loading} />
      <GameOver score={score} onNewGameClick={startNewGame} show={isGameOver} />
      <GameHeader score={score} bestScore={bestScore} level={level} />
      <GameBody cards={cards} onCardClick={handleCardClick} level={level} />
      <Footer />
    </Wrapper>
  );
}

export default App;
