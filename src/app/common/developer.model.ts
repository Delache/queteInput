export class Developer {
  public lastName: string;
  public firstName: string;
  public age: number;
  public sexe: string;
  public bio: string;

constructor(input?: Developer) {
  if (input == null) {

    Object.assign(this, input);
  }
}
}
