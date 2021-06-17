class Statistics {
    constructor() {
        this.gameResults = [];
    }
    addGameToStatistics(winArgument, bidArgument) {
        let gameResultSingle = {
            win: winArgument,
            bid: bidArgument,
        }
        console.log(gameResultSingle);
        this.gameResults.push(gameResultSingle)

    }

    showGameStatistics() {
        let games = this.gameResults.length;
        let wins = this.gameResults.filter(result => result.win).length;
        let losses = this.gameResults.filter(result => !result.win).length;
        //zwrócona wartość jest tablicą

        console.log(games, wins, losses);
        return [games, wins, losses];
    }

}

const stats = new Statistics();