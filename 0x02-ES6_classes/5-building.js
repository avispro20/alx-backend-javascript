// Implement a class, Building
export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    return `This is an evacuation warning message for building ${this._sqft}`;
  }
}
