class Game {

    constructor() {

        this._itsScore = 0;
        this._itsThrows = [];
        this._itsCurrentFrame = 1;
        this._firstThrowInFrame = true;
        this._firstBallInFrame = 0;

    }

    score() {

        return this.scoreForFrame( this.getCurrentFrame() - 1 );

    }

    /**
     * @param { number } theFrame 
     */
    scoreForFrame( theFrame ) {

        let score = 0;
        this._firstBallInFrame = 0;

        for( let currentFrame = 1; currentFrame <= theFrame; ++currentFrame ) {

            if( this._isStrike() ) {

                score += 10 + this._next2ThrowsForStrike();

                ++this._firstBallInFrame;

            } else if( this._isSpare() ) {

                score += 10 + this._nextThrowForSpare();

                this._firstBallInFrame += 2;

            } else {

                score += this._twoThrowsInframe();

                this._firstBallInFrame += 2;

            }

        }

        return score;

    }

    _isStrike() {

        return this._firstThrow() === 10;

    }

    _isSpare() {

        return this._firstThrow() + this._nextThrow() === 10;

    }

    _next2ThrowsForStrike() {

        return this._nextThrow() + this._next2thThrow();

    }

    _nextThrowForSpare() {

        return this._next2thThrow();

    }

    _twoThrowsInframe() {

        return this._firstThrow() + this._nextThrow();

    }

    _firstThrow() {

        return this._itsThrows[ this._firstBallInFrame ];

    }

    _nextThrow() {

        return this._itsThrows[ this._firstBallInFrame + 1 ];

    }

    _next2thThrow() {

        return this._itsThrows[ this._firstBallInFrame + 2 ];

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

        if( this._firstThrowInFrame ) {

            if( pins === 10 ) { // strike

                ++this._itsCurrentFrame;

            } else {

                this._firstThrowInFrame = false;

            }

        } else {

            ++this._itsCurrentFrame;
            this._firstThrowInFrame = true;

        }

        this._itsCurrentFrame = Math.min( 11, this._itsCurrentFrame );

    }

    getCurrentFrame() {

        return this._itsCurrentFrame;

    }

}

export { Game };