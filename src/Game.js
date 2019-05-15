class Game {

    constructor() {

        this._itsScore = 0;

    }

    score() {

        return this._itsScore;

    }

    /**
     * @param { number } frame 
     */
    scoreForFrame( frame ) {

        return 0;

    }

    /**
     * @param { number } pins 
     */
    add( pins ) {

        this._itsScore += pins;

    }

}

export { Game };