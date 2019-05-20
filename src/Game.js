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

        if( this._firstThrowInFrame ) {

            if( this._ajustFrameForStrike( pins ) === false ) {

                this._firstThrowInFrame = false;

            }

        } else {

            this._advanceFrame();
            this._firstThrowInFrame = true;

        }

    }

    /**
     * @param { number } pins 
     * @returns { boolean }
     */
    _ajustFrameForStrike( pins ) {

        if( pins === 10 ) {

            this._advanceFrame();
            return true;

        } else {

            return false;

        }

    }

    _advanceFrame() {

        this._itsCurrentFrame = Math.min( 10, this._itsCurrentFrame + 1 );

    }


    getCurrentFrame() {

        return this._itsCurrentFrame;

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