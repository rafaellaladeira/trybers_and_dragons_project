import Race from './Race';

export default class Halfling extends Race {
  private static _raceNumber = 0;
  constructor(name:string, dexterity: number, private _maxLifePoints = 60) {
    super(name, dexterity);
  
    Halfling._raceNumber += 1;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
  
  static createdRacesInstances(): number {
    return Halfling._raceNumber;
  }
}