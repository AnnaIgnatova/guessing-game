class GuessingGame {
  constructor() {
    this.min = 0;
    this.max = 0;
    this.num = 0;
  }

  setRange(min, max) {
    this.min = min + 1;
    this.max = max - 1;
    this.num = Math.round((this.min + this.max) / 2);
  }

  guess() {
    this.num = Math.round((this.min + this.max) / 2);
    return this.num;
  }

  lower() {
    this.max = this.num - 1;
  }

  greater() {
    this.min = this.num + 1;
  }
}

module.exports = GuessingGame;
