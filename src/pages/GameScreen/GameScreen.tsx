import PlayerCardLeft from "./components/PlayerCardLeft/PlayerCardLeft";
import PlayerCardRight from "./components/PlayerCardRight/PlayerCardRight";
import avatar1 from "@/assets/avatarjosereyes.png";
import avatarplayer from "@/assets/avatarplayer1.png";

export interface GameScreenInterface {}

/**
 * Home page
 * Uses the {@link FormTDContainer} and {@link ListTDContainer} components
 */
const GameScreen: React.FC<GameScreenInterface> = () => {
  return (
    <section className="pt-4">
      <div className="flex flex-row flex-wrap justify-around">
        <PlayerCardLeft
          opponentName="Player"
          avatar={avatarplayer}
        ></PlayerCardLeft>
        <PlayerCardRight
          opponentName="José Reyes"
          avatar={avatar1}
        ></PlayerCardRight>
      </div>
    </section>
  );
};

export default GameScreen;
