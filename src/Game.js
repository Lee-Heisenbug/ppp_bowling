import Scorer from './Scorer';

class Game {

    constructor() {

        this._itsScore = 0;
        this._itsCurrentFrame = 1;
        this._firstThrowInFrame = true;
        this._scorer = new Scorer();

    }

    /**
     * @param { number } pins 
     */
    add( pins ) {

        this._scorer.addThrow( pins );
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

    score() {

        return this.scoreForFrame( this.getCurrentFrame() - 1 );

    }

    /**
     * @param { number } theFrame 
     */
    scoreForFrame( theFrame ) {

        return this._scorer.scoreForFrame( theFrame );

    }

}

export { Game };