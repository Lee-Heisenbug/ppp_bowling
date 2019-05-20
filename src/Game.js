import Scorer from './Scorer';

class Game {

    constructor() {

        this._itsCurrentFrame = 0;
        this._firstThrowInFrame = true;
        this._scorer = new Scorer();

    }

    /**
     * @param { number } pins 
     */
    add( pins ) {

        this._scorer.addThrow( pins );
        this._ajustCurrentFrame( pins );

    }

    /**
     * @param { number } pins 
     */
    _ajustCurrentFrame( pins ) {

        if( this._lastBallInFrame( pins ) ) {

            this._advanceFrame();

        } else {

            this._firstThrowInFrame = false;

        }

    }

    /**
     * @param { number } pins
     * @returns { boolean }
     */
    _lastBallInFrame( pins ) {

        return this._strike( pins ) || !this._firstThrowInFrame;

    }

    /**
     * @param { number } pins
     * @returns { boolean }
     */
    _strike( pins ) {

        return ( this._firstThrowInFrame && pins === 10 );

    }

    _advanceFrame() {

        this._itsCurrentFrame = Math.min( 10, this._itsCurrentFrame + 1 );
        this._firstThrowInFrame = true;

    }

    score() {

        return this.scoreForFrame( this._itsCurrentFrame );

    }

    /**
     * @param { number } theFrame 
     */
    scoreForFrame( theFrame ) {

        return this._scorer.scoreForFrame( theFrame );

    }

}

export { Game };