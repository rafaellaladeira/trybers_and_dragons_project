import Race from './Race';

export default class Orc extends Race {
  private static _raceNumber = 0;
  constructor(name:string, dexterity: number, private _maxLifePoints = 74) {
    super(name, dexterity);

    Orc._raceNumber += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Orc._raceNumber;
  }
}