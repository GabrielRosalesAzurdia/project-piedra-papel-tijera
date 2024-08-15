import { Action } from "./action"
import { ActionCodes } from "./actionCodes"

export class Player{
    name: string
    points: Number = 0
    actions: Action[] = [
        new Action("Rock",ActionCodes.rock,ActionCodes.paper,ActionCodes.scissors),
        new Action("Paper",ActionCodes.paper,ActionCodes.scissors,ActionCodes.rock),
        new Action("Scissors",ActionCodes.scissors,ActionCodes.rock,ActionCodes.paper),
    ]

    constructor (name:string){
        this.name = name
    }
}