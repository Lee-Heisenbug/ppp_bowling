class Game {

    constructor() {

        this._itsScore = 0;
        this._itsThrows = [];
        this._itsCurrentFrame = 1;
        this._firstThrow = true;

    }

    score() {

        return this.scoreForFrame( this.getCurrentFrame() - 1 );

    }

    /**
     * @param { number } frame 
     */
    scoreForFrame( frame ) {

        let score = 0;
        let ballsPerFrame = 2;

        for( let ball = 0; ball < frame * ballsPerFrame; ++ball ) {

            score += this._itsThrows[ ball ];
            if( score === 10 ) {

                score += this._itsThrows[ ball + 1 ];

            }

        }

        return score;

    }

    /**
     * @param { number } pins 
     */
    add( pins ) {

        this._itsThrows.push( pins );
        this._itsScore += pins;
        this._ajustCurrentFrame( pins );

    }

    /**
     * @param { number } pins 
     */
    _ajustCurrentFrame( pins ) {

        if( this._firstThrow ) {

            if( this._isStrike( pins ) ) {

                ++this._itsCurrentFrame;

            } else {

                this._firstThrow = false;

            }

        } else {

            ++this._itsCurrentFrame;
            this._firstThrow = true;

        }

    }

    /**
     * @param { number } pins 
     */
    _isStrike( pins ) {

        return pins === 10;

    }

    getCurrentFrame() {

        return this._itsCurrentFrame;

    }

}

export { Game };