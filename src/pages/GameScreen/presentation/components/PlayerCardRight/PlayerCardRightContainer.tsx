import React, { useContext, useEffect } from "react";
import PlayerCardRight from "./PlayerCardRight";
import { GameContext } from "../../context/GameContext";

interface PlayerCardRightContainerInterface {}

const PlayerCardRightContainer: React.FC<
  PlayerCardRightContainerInterface
> = ({}) => {
  const { gameState, setGame } = useContext(GameContext);

  useEffect(() => {
    if(gameState.player1.selectedAction != undefined && gameState.player2.selectedAction == undefined){
      gameState.player2.selectedAction = gameState.player2.actions[Math.floor(Math.random()*gameState.player2.actions.length)]
      document.getElementById(gameState.player2.selectedAction.name+"right")?.classList.add("btn-active")
      document.getElementById(gameState.player2.selectedAction.name+"rightimage")?.classList.remove("hidden")
      document.getElementById("swapright")?.classList.add("swap-active")
      setGame({ ...gameState });    
    }
  }, [gameState])

  return (
    <PlayerCardRight
      opponentName={gameState.player2.name}
      avatar={gameState.player2.avatar}
      actions={gameState.player2.actions}
    ></PlayerCardRight>
  );
};

export default PlayerCardRightContainer;
