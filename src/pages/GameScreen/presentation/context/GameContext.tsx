import { createContext } from "react";
import { Game } from "@/domain/entities/game";

interface GameContextProps {
  gameState: Game;
}

export const GameContext = createContext<GameContextProps>(
  {} as GameContextProps
);
