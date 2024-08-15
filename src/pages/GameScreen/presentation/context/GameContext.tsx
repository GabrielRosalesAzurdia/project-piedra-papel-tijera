import { createContext, Dispatch, SetStateAction } from "react";
import { Game } from "@/domain/entities/game";

interface GameContextProps {
  gameState: Game;
  setGame: Dispatch<SetStateAction<Game>>
}

export const GameContext = createContext<GameContextProps>(
  {} as GameContextProps
);
