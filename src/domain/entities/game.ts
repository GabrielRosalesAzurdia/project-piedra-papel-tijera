import { Action } from "./action";
import { ActionCodes } from "./actionCodes";
import { Player } from "./player";
import { opponents } from "@/data/opponents.json";

// pc images
import paperRight from "@/assets/papel derecha.png";
import rockRight from "@/assets/piedra derecha.png";
import scissorsRight from "@/assets/tijera derecha.png";

// player image
import paperleft from "@/assets/papel izquierda.png";
import rockleft from "@/assets/piedra izquierda.png";
import scissorsleft from "@/assets/tijera izquierda.png";

// no avatar
import avatarplayer from "@/assets/avatarplayer1.png";

export class Game {
  player1: Player;
  player2: Player;
  finished: Boolean = false;

  constructor() {
    this.player1 = new Player("Anonymos player", avatarplayer, [
      new Action(
        "Rock",
        ActionCodes.rock,
        ActionCodes.paper,
        ActionCodes.scissors,
        rockleft
      ),
      new Action(
        "Paper",
        ActionCodes.paper,
        ActionCodes.scissors,
        ActionCodes.rock,
        paperleft
      ),
      new Action(
        "Scissors",
        ActionCodes.scissors,
        ActionCodes.rock,
        ActionCodes.paper,
        scissorsleft
      ),
    ]);
    let randomOpponent =
      opponents[Math.floor(Math.random() * opponents.length)];
    this.player2 = new Player(randomOpponent.name, randomOpponent.avatar, [
      new Action(
        "Rock",
        ActionCodes.rock,
        ActionCodes.paper,
        ActionCodes.scissors,
        rockRight
      ),
      new Action(
        "Paper",
        ActionCodes.paper,
        ActionCodes.scissors,
        ActionCodes.rock,
        paperRight
      ),
      new Action(
        "Scissors",
        ActionCodes.scissors,
        ActionCodes.rock,
        ActionCodes.paper,
        scissorsRight
      ),
    ]);
  }
}
