import { ActionCodes } from "./actionCodes"

export class Action{
    name: string
    code: ActionCodes
    weakness: ActionCodes
    effective: ActionCodes

    constructor(name:string, code:ActionCodes, weakness:ActionCodes, effective:ActionCodes){
        this.name = name
        this.code = code
        this.weakness = weakness
        this.effective = effective
    }
}