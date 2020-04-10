class Scorer {
  constructor () {
    this._itsThrows = []
    this._firstBallInFrame = 0
  }

  /**
     * @param { number } pins
     */
  addThrow (pins) {
    this._itsThrows.push(pins)
  }

  /**
     * @param { number } theFrame
     */
  scoreForFrame (theFrame) {
    let score = 0
    this._firstBallInFrame = 0

    for (let currentFrame = 0; currentFrame < theFrame; ++currentFrame) {
      if (this._isStrike()) {
        score += 10 + this._next2ThrowsForStrike()

        ++this._firstBallInFrame
      } else if (this._isSpare()) {
        score += 10 + this._nextThrowForSpare()

        this._firstBallInFrame += 2
      } else {
        score += this._twoThrowsInframe()

        this._firstBallInFrame += 2
      }
    }

    return score
  }

  _isStrike () {
    return this._firstThrow() === 10
  }

  _isSpare () {
    return this._firstThrow() + this._nextThrow() === 10
  }

  _next2ThrowsForStrike () {
    return this._nextThrow() + this._next2thThrow()
  }

  _nextThrowForSpare () {
    return this._next2thThrow()
  }

  _twoThrowsInframe () {
    return this._firstThrow() + this._nextThrow()
  }

  _firstThrow () {
    return this._itsThrows[this._firstBallInFrame]
  }

  _nextThrow () {
    return this._itsThrows[this._firstBallInFrame + 1]
  }

  _next2thThrow () {
    return this._itsThrows[this._firstBallInFrame + 2]
  }
}

export default Scorer
