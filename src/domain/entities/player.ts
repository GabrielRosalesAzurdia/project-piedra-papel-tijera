import { Action } from "./action";

export class Player {
  avatar: string;
  name: string;
  points: Number = 0;
  selectedAction: Action | undefined;
  actions: Action[] = [];

  constructor(name: string, avatar: string, actions: Action[]) {
    this.name = name;
    this.avatar = avatar;
    this.actions = actions;
  }
}
