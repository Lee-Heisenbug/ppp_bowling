class Game {

    constructor() {

        this._itsScore = 0;
        this._itsThrows = [];

    }

    score() {

        return this._itsScore;

    }

    /**
     * @param { number } frame 
     */
    scoreForFrame( frame ) {

        let score = 0;
        let ballsPerFrame = 2;

        for( let ball = 0; ball < frame * ballsPerFrame; ++ball ) {

            score += this._itsThrows[ ball ];    

        }

        return score;

    }

    /**
     * @param { number } pins 
     */
    add( pins ) {

        this._itsThrows.push( pins );
        this._itsScore += pins;

    }

}

export { Game };