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
     * @param { number } theFrame 
     */
    scoreForFrame( theFrame ) {

        let score = 0;
        let firstBallInFrame = 0;
        let nextBall = 0;
        let next2thBall = 0;

        for( let currentFrame = 1; currentFrame <= theFrame; ++currentFrame ) {

            nextBall = firstBallInFrame + 1;
            next2thBall = firstBallInFrame + 2;

            if( this._isStrike( this._itsThrows[ firstBallInFrame ] ) ) {

                score += this._itsThrows[ firstBallInFrame ];
                score += this._itsThrows[ nextBall ] + this._itsThrows[ next2thBall ];

                ++firstBallInFrame;

            } else {

                score += this._itsThrows[ firstBallInFrame ] + this._itsThrows[ nextBall ];

                if( this._isSpare( this._itsThrows[ firstBallInFrame ], this._itsThrows[ nextBall ] ) ) {

                    score += this._itsThrows[ next2thBall ];

                }

                firstBallInFrame += 2;                

            }

        }

        return score;

    }

    /**
     * @param { number } firstPins 
     * @param { number } secondPins 
     */
    _isSpare( firstPins, secondPins ) {

        return firstPins + secondPins === 10;

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