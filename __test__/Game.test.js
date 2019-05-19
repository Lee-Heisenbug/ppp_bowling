import { Game } from '../src/Game';

let g = new Game();

beforeEach( () => {

    g = new Game();

} )

test( 'test no throws', () => {

    expect( g.score() ).toBe( 0 );

} )

test( 'test 2 throws no mark', () => {

    g.add( 5 );
    g.add( 4 );

    expect( g.getCurrentFrame() ).toBe( 2 );
    expect( g.score() ).toBe( 9 );

} )

test( 'test 4 throws no mark', () => {

    g.add( 5 );
    g.add( 4 );
    g.add( 7 );
    g.add( 2 );

    expect( g.getCurrentFrame() ).toBe( 3 );
    expect( g.scoreForFrame( 1 ) ).toBe( 9 );
    expect( g.scoreForFrame( 2 ) ).toBe( 18 );
    expect( g.score() ).toBe( 18 );

} )

test( 'test simple spare', () => {

    g.add( 3 );
    g.add( 7 );
    g.add( 3 );
    expect( g.getCurrentFrame() ).toBe( 2 );
    expect( g.scoreForFrame( 1 ) ).toBe( 13 );

} )

test( 'test simple frame after spare', () => {

    g.add( 3 );
    g.add( 7 );
    g.add( 3 );
    g.add( 2 );
    expect( g.getCurrentFrame() ).toBe( 3 );
    expect( g.scoreForFrame( 1 ) ).toBe( 13 );
    expect( g.scoreForFrame( 2 ) ).toBe( 18 );
    expect( g.score() ).toBe( 18 )

} )

test( 'test strike', () => {

    g.add( 10 );
    g.add( 3 );
    g.add( 6 );
    expect( g.getCurrentFrame() ).toBe( 3 );
    expect( g.scoreForFrame( 1 ) ).toBe( 19 );
    expect( g.score() ).toBe( 28 );

} )