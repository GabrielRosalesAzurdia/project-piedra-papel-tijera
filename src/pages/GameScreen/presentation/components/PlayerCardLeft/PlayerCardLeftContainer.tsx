import React, { useContext } from "react";
import PlayerCardLeft from "./PlayerCardLeft";
import { GameContext } from "../../context/GameContext";
import { Action } from "@/domain/entities/action";

interface PlayerCardLeftContainerInterface {}

const PlayerCardLeftContainer: React.FC<
  PlayerCardLeftContainerInterface
> = ({}) => {
  const { gameState, setGame } = useContext(GameContext);

  const handleOnClick = (action: Action): void => {
    if(gameState.finished){
      return;
    }
    gameState.player1.selectedAction = action;
    document.getElementById(gameState.player1.selectedAction.name+"left")?.classList.add("btn-active")
    document.getElementById(gameState.player1.selectedAction.name+"leftimage")?.classList.remove("hidden")
    document.getElementById("swapleft")?.classList.add("swap-active")
    setGame({ ...gameState });
  };

  return (
    <PlayerCardLeft
      name={gameState.player1.name}
      avatar={gameState.player1.avatar}
      actions={gameState.player1.actions}
      handleOnClick={handleOnClick}
    ></PlayerCardLeft>
  );
};

export default PlayerCardLeftContainer;
