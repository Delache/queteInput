export class Skill {
  public name: string;
  public site: string;
  public logo: string;

  constructor(input: Skill) {
    Object.assign(this, input);
  }}
