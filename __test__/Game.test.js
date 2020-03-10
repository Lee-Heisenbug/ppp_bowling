import { Game } from '../src/Game';

let g = new Game();

beforeEach( () => {

    g = new Game();
    new;

} )

test( 'test no throws', () => {

    expect( g.score() ).toBe( 0 );

} )

test( 'test 2 throws no mark', () => {

    g.add( 5 );
    g.add( 4 );

    expect( g.score() ).toBe( 9 );

} )

test( 'test 4 throws no mark', () => {

    g.add( 5 );
    g.add( 4 );
    g.add( 7 );
    g.add( 2 );

    expect( g.scoreForFrame( 1 ) ).toBe( 9 );
    expect( g.scoreForFrame( 2 ) ).toBe( 18 );
    expect( g.score() ).toBe( 18 );

} )

test( 'test simple spare', () => {

    g.add( 3 );
    g.add( 7 );
    g.add( 3 );
    expect( g.scoreForFrame( 1 ) ).toBe( 13 );

} )

test( 'test simple frame after spare', () => {

    g.add( 3 );
    g.add( 7 );
    g.add( 3 );
    g.add( 2 );
    expect( g.scoreForFrame( 1 ) ).toBe( 13 );
    expect( g.scoreForFrame( 2 ) ).toBe( 18 );
    expect( g.score() ).toBe( 18 )

} )

test( 'test strike', () => {

    g.add( 10 );
    g.add( 3 );
    g.add( 6 );
    expect( g.scoreForFrame( 1 ) ).toBe( 19 );
    expect( g.score() ).toBe( 28 );

} )

test( 'test perfect game', () => {

    for( let i = 0; i < 12; ++i ) {

        g.add( 10 );

    }

    expect( g.score() ).toBe( 300 );

} )

test( 'test end of array', () => {

    for( let i = 0; i < 9; ++i ) {

        g.add( 0 );
        g.add( 0 );

    }

    g.add( 2 );
    g.add( 8 );
    g.add( 10 );

    expect( g.score() ).toBe( 20 );

} )

test( 'test sample game', () => {

    g.add( 1 );
    g.add( 4 );
    g.add( 4 );
    g.add( 5 );
    g.add( 6 );
    g.add( 4 );
    g.add( 5 );
    g.add( 5 );
    g.add( 10 );
    g.add( 0 );
    g.add( 1 );
    g.add( 7 );
    g.add( 3 );
    g.add( 6 );
    g.add( 4 );
    g.add( 10 );
    g.add( 2 );
    g.add( 8 );
    g.add( 6 );

    expect( g.score() ).toBe( 133 );

} )

test( 'test heart break game', () => {

    for( let i = 0; i < 11; ++i ) {

        g.add( 10 );

    }

    g.add( 9 );
    
    expect( g.score() ).toBe( 299 );

} )

test( 'test tenth frame spare', () => {

    for( let i = 0; i < 9; ++i ) {

        g.add( 10 );

    }

    g.add( 9 );
    g.add( 1 );

    g.add( 1 );

    expect( g.score() ).toBe( 270 );

} )