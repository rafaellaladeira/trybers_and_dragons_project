import Race from './Race';

export default class Orc extends Race {
  constructor(name:string, dexterity: number) {
    super(name, dexterity);
  }

  maxLifePoints = 80;
}