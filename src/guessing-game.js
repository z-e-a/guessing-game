class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.assumption = Math.round((this.min + this.max) / 2);
        return this.assumption;
    }

    lower() {
//        return Math.round((min + this.assumption) / 2)
        this.max = this.assumption;
    }
    
    greater() {
        // return Math.round((this.assumption + max) / 2)
        this.min = this.assumption;
    }
}

 module.exports = GuessingGame;