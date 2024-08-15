import { useContext, useEffect, useState } from "react";
import PlayerCardLeftContainer from "./presentation/components/PlayerCardLeft/PlayerCardLeftContainer";
import PlayerCardRightContainer from "./presentation/components/PlayerCardRight/PlayerCardRightContainer";
import { GameContext } from "./presentation/context/GameContext";

export interface GameScreenInterface {}

const GameScreen: React.FC<GameScreenInterface> = () => {
  const { gameState, setGame } = useContext(GameContext);

  const [modalText, setmodalText] = useState("Nadie : P");
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
        gameState.player1.points += 1;
      }

      if (
        gameState.player1.selectedAction.weakness ==
        gameState.player2.selectedAction.code
      ) {
        // gana player 2
        setmodalText(gameState.player2.name);
        setmodalAvatar(gameState.player2.avatar);
        gameState.player2.points += 1;
      }

      const winnerModal = document.getElementById(
        "winnermodal"
      ) as HTMLDialogElement;
      winnerModal.showModal();
      setGame({ ...gameState, finished: true });
    }
  }, [gameState]);

  const reset = ()=>{
    document.getElementById("swapleft")?.classList.remove("swap-active")
    document.getElementById("swapright")?.classList.remove("swap-active")
    document.getElementById(gameState.player1.selectedAction?.name+"leftimage")?.classList.add("hidden")
    document.getElementById(gameState.player2.selectedAction?.name+"rightimage")?.classList.add("hidden")
    document.getElementById(gameState.player1.selectedAction?.name+"left")?.classList.remove("btn-active")
    document.getElementById(gameState.player2.selectedAction?.name+"right")?.classList.remove("btn-active")
    gameState.finished = false
    gameState.player1.selectedAction = undefined
    gameState.player2.selectedAction = undefined
    setGame({ ...gameState, })
  }

  return (
    <section className="pt-10">
      <div className="flex flex-row flex-wrap justify-around">
        <PlayerCardLeftContainer />
        <PlayerCardRightContainer />
      </div>

      <div
        className="pt-10 text-center pb-10"
        onClick={reset}
      >
        <button className="btn btn-accent btn-lg">
          Reset
        </button>
      </div>

      <dialog id="winnermodal" className="modal">
        <div className="modal-box object-center">
          <h3 className="font-bold text-lg text-center">El ganador es</h3>
          <div className="flex items-center justify-center pt-4">
            {modalAvatar == "" ? (
              <span></span>
            ) : (
              <img
                src={modalAvatar}
                alt="winnerpic"
                width="150px"
                height="150px"
              />
            )}
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
