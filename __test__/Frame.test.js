import { Frame } from '../src/Frame';

test( 'test score with no throws', () => {

    let frame = new Frame();

    expect( frame.getScore() ).toBe( 0 );

} )