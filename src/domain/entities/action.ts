import { ActionCodes } from "./actionCodes"

export class Action{
    name: string
    code: ActionCodes
    weakness: ActionCodes
    effective: ActionCodes
    image: string

    constructor(name:string, code:ActionCodes, weakness:ActionCodes, effective:ActionCodes, image:string){
        this.name = name
        this.code = code
        this.weakness = weakness
        this.effective = effective
        this.image = image
    }
}