import { Action } from "./action"
import { ActionCodes } from "./actionCodes"

export class Player{
    avatar:string
    name: string
    points: Number = 0
    selectedAction:Action|undefined
    actions: Action[] = [
        new Action("Rock",ActionCodes.rock,ActionCodes.paper,ActionCodes.scissors),
        new Action("Paper",ActionCodes.paper,ActionCodes.scissors,ActionCodes.rock),
        new Action("Scissors",ActionCodes.scissors,ActionCodes.rock,ActionCodes.paper),
    ]

    constructor (name:string, avatar:string){
        this.name = name
        this.avatar = avatar
    }

    selectAction(actionCode:ActionCodes){
        this.selectedAction =  this.actions.find((action) => action.code = actionCode)
        return;
    }
}