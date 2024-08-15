import PlayerCardLeftContainer from "./presentation/components/PlayerCardLeft/PlayerCardLeftContainer";
import PlayerCardRightContainer from "./presentation/components/PlayerCardRight/PlayerCardRightContainer";
import { GameProvider } from "./presentation/context/GameProvider";

export interface GameScreenInterface {}

const GameScreen: React.FC<GameScreenInterface> = () => {
  return (
    <GameProvider>
      <section className="pt-4">
        <div className="flex flex-row flex-wrap justify-around">
          <PlayerCardLeftContainer />
          <PlayerCardRightContainer />
        </div>
      </section>
    </GameProvider>
  );
};

export default GameScreen;
