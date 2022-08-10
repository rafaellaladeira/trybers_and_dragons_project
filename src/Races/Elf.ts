import Race from './Race';

export default class Elf extends Race {
  private static _raceNumber = 0;
  constructor(name:string, dexterity: number, private _maxLifePoints = 99) {
    super(name, dexterity);
  
    Elf._raceNumber += 1;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
  
  static createdRacesInstances(): number {
    return Elf._raceNumber;
  }
}