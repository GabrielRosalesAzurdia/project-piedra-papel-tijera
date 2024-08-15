import React from "react";
import { GameContext } from "./GameContext";
import { Game } from "@/domain/entities/game";
import { Player } from "@/domain/entities/player";
import avatarplayer from "@/assets/avatarplayer1.png";

const INITIAL_STATE: Game = new Game(
    new Player("Player name",avatarplayer)
  );

interface GameContextInterface {
	children: JSX.Element | JSX.Element[];
}

export const GameProvider: React.FC<GameContextInterface> = ({
	children,
}) => {
	const game = INITIAL_STATE;
	return (
		<GameContext.Provider value={{gameState:game}}>
			{children}
		</GameContext.Provider>
	);
};