import { Player } from "./player"
import {opponents} from "@/data/opponents.json"

export class Game{
    player1:Player
    player2:Player
    finished:Boolean = false

    constructor(player1:Player){
        this.player1 = player1
        let randomOpponent = opponents[Math.floor(Math.random()*opponents.length)]
        this.player2 = new Player(randomOpponent.name,randomOpponent.avatar)
    }
}