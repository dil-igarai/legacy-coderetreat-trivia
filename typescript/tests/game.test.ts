import {expect} from 'chai';
import {describe, it} from 'mocha';
import {GameRunner} from '../src/game-runner';
import { Game } from '../src/game';

import sinon, { spy } from 'sinon';


describe('The test environment', () => {
    it('should pass', () => {
        expect(true).to.be.true;
    });

    it("should access game", function () {
        expect(GameRunner).to.not.be.undefined;
    });

    it("game.add should add new players", function () {
        const game = new Game();
        const player1 = "Peter";
        const player2 = "Andy";

        let playerLength = 1;

        const consoleSpy = spy(console, 'log');
        
        game.add(player1)

        expect(consoleSpy.calledWith(`${player1} was added`)).to.be.true;
        expect(consoleSpy.calledWith(`They are player number ${playerLength}`)).to.be.true;

        game.add(player2)
        playerLength++;


        expect(consoleSpy.calledWith(`${player2} was added`)).to.be.true;
        expect(consoleSpy.calledWith(`They are player number ${playerLength}`)).to.be.true;

        consoleSpy.restore();
    });

    it("game.roll should get the current player right", function () {
        const game = new Game();
        const player1 = "Peter";
        const player2 = "Andy";

        let currentPlayer = player1;

        const consoleSpy = spy(console, 'log');
        game.add(player1)
        game.add(player2)

        const rolled = 1;
        game.roll(rolled);
        expect(consoleSpy.calledWith(`${currentPlayer} is the current player`)).to.be.true;
        expect(consoleSpy.calledWith(`They have rolled a ${rolled}`)).to.be.true;

        consoleSpy.restore();
    });

/*     const rollCases = [
        { rolled: 1, expected: 1 },
        { rolled: 2, expected: 2 },
        { rolled: 3, expected: 3 },
        { rolled: 4, expected: 4 },
        { rolled: 5, expected: 5 },
        { rolled: 16, expected: 4 },
    ];

    rollCases.forEach(({ rolled, expected }) => {
        it(`game.roll should calculate the new position right for ${rolled}`, function () {
            const game = new Game();
            const player1 = "Peter";

            let currentPlayer = player1;

            const consoleSpy = spy(console, 'log');
            game.add(player1);

            game.roll(rolled);
            expect(consoleSpy.calledWith(`${currentPlayer}'s new location is ${expected}`)).to.be.true;

            consoleSpy.restore();
        });
    }); */
    // it("game.roll should calculate the player's new position right", function () {
    //     const game = new Game();
    //     const player1 = "Peter";

    //     let currentPlayer = player1;

    //     const consoleSpy = spy(console, 'log');
    //     game.add(player1)

    //     const rolled = 1;
    //     game.roll(rolled);
    //     expect(consoleSpy.calledWith(`${currentPlayer}'s new location is ${rolled}`)).to.be.true;

    //     consoleSpy.restore();
    // });

    // it("game.wasCorrectlyAnswered should log \'answer was correct!'\ text on correct player answer", function () {

    //     const consoleSpy = spy(console, 'log');


    //     consoleSpy.restore();
    // });

    // it("game.wasCorrectlyAnswered should log text \'<player name>'s answer was correct!'\ with player name on good answer", function () {
    //     const game = new Game();
    //     const currentPlayer = "Peter";


    //     game.wasCorrectlyAnswered();
    //     const consoleSpy = spy(console, 'log');

    //     expect(consoleSpy.calledWith(`${currentPlayer}'s answer was correct!`)).to.be.true;


    //     consoleSpy.restore();
    // });

    it("game.roll should calculate the first player's new position right", function () {
        const game = new Game();
        const player1 = "Peter";

        let currentPlayer = player1;

        const consoleSpy = spy(console, 'log');
        game.add(player1)

        const rolled = 1;
        game.roll(rolled);

        expect(consoleSpy.calledWith(`${currentPlayer}'s new location is 1`)).to.be.true;

        consoleSpy.restore();
    });

    it("game.roll should calculate the first player's new position right", function () {
        const game = new Game();
        const player1 = "Peter";

        let currentPlayer = player1;

        const consoleSpy = spy(console, 'log');
        game.add(player1)

        const rolled = 1;
        game.roll(rolled);

        expect(consoleSpy.calledWith(`${currentPlayer}'s new location is 1`)).to.be.true;

        consoleSpy.restore();
    });
});
