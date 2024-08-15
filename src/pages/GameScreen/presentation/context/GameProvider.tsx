import React, { useState } from "react";
import { GameContext } from "./GameContext";
import { Game } from "@/domain/entities/game";

interface GameContextInterface {
	children: JSX.Element | JSX.Element[];
}

export const GameProvider: React.FC<GameContextInterface> = ({
	children,
}) => {
	const [gameState, setGame] = useState(new Game());
	return (
		<GameContext.Provider value={{gameState,setGame}}>
			{children}
		</GameContext.Provider>
	);
};