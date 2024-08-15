import { useContext, useEffect, useState } from "react";
import PlayerCardLeftContainer from "./presentation/components/PlayerCardLeft/PlayerCardLeftContainer";
import PlayerCardRightContainer from "./presentation/components/PlayerCardRight/PlayerCardRightContainer";
import { GameContext } from "./presentation/context/GameContext";

export interface GameScreenInterface {}

const GameScreen: React.FC<GameScreenInterface> = () => {
  const { gameState, setGame } = useContext(GameContext);

  const [modalText, setmodalText] = useState("Nadie ;)");
  const [modalAvatar, setmodalAvatar] = useState("");

  useEffect(() => {
    if (
      gameState.player1.selectedAction != undefined &&
      gameState.player2.selectedAction != undefined &&
      gameState.finished == false
    ) {
      if (
        gameState.player1.selectedAction.effective ==
        gameState.player2.selectedAction.code
      ) {
        // gana player 1
        setmodalText(gameState.player1.name);
        setmodalAvatar(gameState.player1.avatar);
      }

      if (
        gameState.player1.selectedAction.weakness ==
        gameState.player2.selectedAction.code
      ) {
        // gana player 2
        setmodalText(gameState.player2.name);
        setmodalAvatar(gameState.player2.avatar);
      }

      const winnerModal = document.getElementById(
        "winnermodal"
      ) as HTMLDialogElement;
      winnerModal.showModal();
      setGame({ ...gameState, finished: true });
    }
  }, [gameState]);

  return (
    <section className="pt-4">
      <div className="flex flex-row flex-wrap justify-around">
        <PlayerCardLeftContainer />
        <PlayerCardRightContainer />
      </div>

      <dialog id="winnermodal" className="modal">
        <div className="modal-box object-center">
          <h3 className="font-bold text-lg text-center">El ganador es</h3>
          <div className="flex items-center justify-center pt-4">
          <img src={modalAvatar} alt="winnerpic" width="150px" height="150px" />
          </div>
          <h4 className="font-bold text-base text-center pt-2">{modalText}</h4>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </section>
  );
};

export default GameScreen;
