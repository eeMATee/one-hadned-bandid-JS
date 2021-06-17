// link do gry: https://websamuraj.pl/examples/js/gra/ 

class Game {
    constructor(startMoney) {

        this.stats = new Statistics();
        this.wallet = new Wallet(startMoney);


        document.getElementById('start').addEventListener('click', this.startGame.bind(this));// wiązanie na teraz żeby nie było na przycisk bo po naciśnięciu this będzie się odwoływał do przyciksu.
        this.spanWallet = document.querySelector('.panel span.wallet')
        this.boards = document.querySelectorAll('div.color');
        this.inputBid = document.getElementById('bid');
        this.spanResult = document.querySelector('.score span.result');
        this.spanGames = document.querySelector('.score span.number');
        this.spanWins = document.querySelector('.score span.win');
        this.spanLosses = document.querySelector('.score span.loss');

        this.render();
    }


    render(colors = ['gray', 'gray', 'gray'], money = this.wallet.getWalletValue(), result = "", stats = [0, 0, 0], bid = 0, wonMoney = 0) {
        // console.log('Bende grał w gre');
        this.boards.forEach((board, i) => {
            board.style.backgroundColor = colors[i];
        });

        this.spanWallet.textContent = money;

        if (result) {
            result = `Wygrałeś $${wonMoney}...`
        } else if (!result && result !== "") {
            result = `Przegrałeś $${bid}...`
        }
        this.spanResult.textContent = result;
        this.spanGames.textContent = stats[0];
        this.spanWins.textContent = stats[1];
        this.spanLosses.textContent = stats[2];
    }

    startGame() {
        if (this.inputBid.value < 1)
            return alert('Stawka jest za mała');
        
        const bid = Math.floor(this.inputBid.value);

        if(!this.wallet.checkIfCanPlay(bid)) {
            return alert('Za duża stawka');
        }

        this.wallet.changeWallet(bid, "-");
        this.draw = new Draw();
        const colors = this.draw.getDrawRestult();
        const winOrLose = Result.checkWinner(colors);

        const wonMoney = Result.moneyWinInGame(winOrLose, bid);
        // console.log(wonMoney);
        this.wallet.changeWallet(wonMoney, "+");
        this.stats.addGameToStatistics(winOrLose, bid);

        this.render(colors, this.wallet.getWalletValue(), winOrLose, this.stats.showGameStatistics(), bid, wonMoney)
    }
}