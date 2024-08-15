import React, { useState } from "react";
import { GameContext } from "./GameContext";
import { Game } from "@/domain/entities/game";
import { Player } from "@/domain/entities/player";
import avatarplayer from "@/assets/avatarplayer1.png";

interface GameContextInterface {
	children: JSX.Element | JSX.Element[];
}

export const GameProvider: React.FC<GameContextInterface> = ({
	children,
}) => {
	const [gameState, setGame] = useState(new Game(
		new Player("Player name",avatarplayer)
	  ));
	return (
		<GameContext.Provider value={{gameState,setGame}}>
			{children}
		</GameContext.Provider>
	);
};