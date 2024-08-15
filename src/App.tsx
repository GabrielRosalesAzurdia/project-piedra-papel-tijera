import GameScreen from "./pages/GameScreen/GameScreen";
import { GameProvider } from "./pages/GameScreen/presentation/context/GameProvider";

function App() {
  return (
    <>
      <GameProvider>
        <GameScreen></GameScreen>
      </GameProvider>
    </>
  );
}

export default App;
