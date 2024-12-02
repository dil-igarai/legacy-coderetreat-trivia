import {expect} from 'chai';
import {describe, it} from 'mocha';
import {GameRunner} from '../src/game-runner';
import { Game } from '../src/game';
import sinon from 'sinon';

describe('The test environment', () => {
    it('should pass', () => {
        expect(true).to.be.true;
    });

    it("should access game", function () {
        expect(GameRunner).to.not.be.undefined;
    });

    it("game.add should add new player", function () {
        const game = new Game();
        const player = "Peter";

        const consoleSpy = sinon.spy(console, 'log');
        
        game.add('Peter')

        expect(consoleSpy.calledOnce).to.be.true;
        expect(consoleSpy.calledWith('Player Peter was added')).to.be.true;

        consoleSpy.restore();
    });

});
