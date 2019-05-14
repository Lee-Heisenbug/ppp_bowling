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

test( 'test two throws no mark', () => {

    let g = new Game();

    g.add( 5 );
    g.add( 4 );

    expect( g.score() ).toBe( 9 );

} )