import { consoleMessages } from "../const/translation/translation";

export class Game {
    private players: Array<string> = [];
    private places: Array<number> = [];
    private purses: Array<number> = [];
    private inPenaltyBox: Array<boolean> = [];
    private currentPlayer: number = 0;
    private isGettingOutOfPenaltyBox: boolean = false;
    private t: any = {};

    private popQuestions: Array<string> = [];
    private scienceQuestions: Array<string> = [];
    private sportsQuestions: Array<string> = [];
    private rockQuestions: Array<string> = [];


    
    constructor(language = 'en') {
        this.t = consoleMessages[language];


        for (let i = 0; i < 50; i++) {
            this.popQuestions.push(this.t.popQuestions(i));
            this.scienceQuestions.push(this.t.scienceQuestions(i));
            this.sportsQuestions.push(this.t.sportQuestions(i));
            this.rockQuestions.push(this.t.rockQuestions(i));
            // cat 5 if hu
            // cat 6 if hu
          }
    }

    private createRockQuestion(index: number): string {
        return "Rock Question " + index;
    }

    public add(name: string): boolean {
        this.players.push(name);
        this.places[this.howManyPlayers() - 1]  = 0;
        this.purses[this.howManyPlayers()] = 0;
        this.inPenaltyBox[this.howManyPlayers()] = false;

        console.log(this.t.playerAdded(name));
        console.log(this.t.playerNumber(this.players.length));

        return true;
    }

    private howManyPlayers(): number {
        return this.players.length;
    }

    public roll(roll: number) {
        console.log(this.t.currentPlayer(this.players[this.currentPlayer]));
        console.log(this.t.rolled(roll));
    
        if (this.inPenaltyBox[this.currentPlayer]) {
          if (roll % 2 != 0) {
            this.isGettingOutOfPenaltyBox = true;
    
            console.log(this.t.isGettingOutOfPenaltyBox(this.players[this.currentPlayer]));
            this.places[this.currentPlayer] = this.places[this.currentPlayer] + roll;
            if (this.places[this.currentPlayer] > 11) {
              this.places[this.currentPlayer] = this.places[this.currentPlayer] - 12;
            }
    
            console.log(this.t.newLocation(this.players[this.currentPlayer], this.places[this.currentPlayer]));
            console.log(this.t.category(this.currentCategory()));
            this.askQuestion();
          } else {
            console.log(this.t.isGettingOutOfPenaltyBox(this.players[this.currentPlayer]));
            this.isGettingOutOfPenaltyBox = false;
          }
        } else {
            
            this.places[this.currentPlayer] = this.places[this.currentPlayer] + roll;
            if (this.places[this.currentPlayer] > 11) {
                this.places[this.currentPlayer] = this.places[this.currentPlayer] - 12;
            }

            
          console.log(this.t.newLocation(this.players[this.currentPlayer], this.places[this.currentPlayer]));
          console.log(this.t.category(this.currentCategory())); 
          this.askQuestion();
        }
    }

    private askQuestion(): void {
        if (this.currentCategory() == 'Pop')
            console.log(this.popQuestions.shift());
        if (this.currentCategory() == 'Science')
            console.log(this.scienceQuestions.shift());
        if (this.currentCategory() == 'Sports')
            console.log(this.sportsQuestions.shift());
        if (this.currentCategory() == 'Rock')
            console.log(this.rockQuestions.shift());
    }

    private currentCategory(): string {
        if (this.places[this.currentPlayer] == 0)
            return 'Pop';
        if (this.places[this.currentPlayer] == 4)
            return 'Pop';
        if (this.places[this.currentPlayer] == 8)
            return 'Pop';
        if (this.places[this.currentPlayer] == 1)
            return 'Science';
        if (this.places[this.currentPlayer] == 5)
            return 'Science';
        if (this.places[this.currentPlayer] == 9)
            return 'Science';
        if (this.places[this.currentPlayer] == 2)
            return 'Sports';
        if (this.places[this.currentPlayer] == 6)
            return 'Sports';
        if (this.places[this.currentPlayer] == 10)
            return 'Sports';
        return 'Rock';
    }

    private didPlayerWin(): boolean {
        return !(this.purses[this.currentPlayer] == 6)
    }

    public wrongAnswer(): boolean {
        console.log(this.t.wrongAnswer());
        console.log(this.t.playerSentToPenaltyBox(this.players[this.currentPlayer]));
        this.inPenaltyBox[this.currentPlayer] = true;
    
        this.currentPlayer += 1;
        if (this.currentPlayer == this.players.length)
            this.currentPlayer = 0;
        return true;
    }

    public wasCorrectlyAnswered(): boolean {
        if (this.inPenaltyBox[this.currentPlayer]) {
            if (this.isGettingOutOfPenaltyBox) {
              console.log(this.t.correctAnswerthis.players[this.currentPlayer]);
              this.purses[this.currentPlayer] += 1;
              console.log(this.t.playerGoldCoins(this.players[this.currentPlayer], this.purses[this.currentPlayer]));
      
              var winner = this.didPlayerWin();
              this.currentPlayer += 1;
              if (this.currentPlayer == this.players.length)
                this.currentPlayer = 0;
      
              return winner;
            } else {
              this.currentPlayer += 1;
              if (this.currentPlayer == this.players.length)
                this.currentPlayer = 0;
              return true;
            }
      
      
          } else {
      
            console.log(this.t.correctAnswer(this.players[this.currentPlayer]));
      
            this.purses[this.currentPlayer] += 1;
            console.log(this.t.playerGoldCoins(this.players[this.currentPlayer], this.purses[this.currentPlayer]));

      
            var winner = this.didPlayerWin();
      
            this.currentPlayer += 1;
            if (this.currentPlayer == this.players.length)
                this.currentPlayer = 0;
      
            return winner;
          }
    }

}
