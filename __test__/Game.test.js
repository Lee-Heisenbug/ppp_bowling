import { Game } from '../src/Game';

test( 'test no throws', () => {

    let g = new Game();

    expect( g.score() ).toBe( 0 );

} )

test( 'test one throw', () => {

    let g = new Game();

    g.add( 5 );

    expect( g.score() ).toBe( 5 );

} )

test( 'test 2 throws no mark', () => {

    let g = new Game();

    g.add( 5 );
    g.add( 4 );

    expect( g.score() ).toBe( 9 );

} )

test( 'test 4 throws no mark', () => {

    let g = new Game();

    g.add( 5 );
    g.add( 4 );
    g.add( 7 );
    g.add( 2 );

    expect( g.score() ).toBe( 18 );
    expect( g.scoreForFrame( 1 ) ).toBe( 9 );
    expect( g.scoreForFrame( 2 ) ).toBe( 18 );

} )

