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

    it("game.add should add new player1s", function () {
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

    it("game.add should add new player1s", function () {
        const game = new Game();
        const player1 = "Peter";
        const player2 = "Andy";

        let currentPlayer = player1;

        const consoleSpy = spy(console, 'log');
        game.add(player1)
        game.add(player2)

        game.roll(1);
        expect(consoleSpy.calledWith(`${currentPlayer} is the current player`)).to.be.true;


        consoleSpy.restore();
    });
});
