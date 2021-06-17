class Wallet {
    constructor(money) {
        let _money = money; // ukryta warotść(nie właściwość)
        // pobieranie zawartości portfela
        this.getWalletValue = () => _money;


        // Sprawdzanie czy jest wystarczająca zawartość środków na koncie
        this.checkIfCanPlay = (valueOfBid) => {
            if (_money >= valueOfBid)
                return true;
            else return false;
        }

        this.changeWallet = (value, type = "+") => {
            if (typeof value === "number" && !isNaN(value)) {
                if (type === "+")
                    return _money += value;
                else if (type === "-")
                    return _money -= value;
                else
                    throw new Error("Nieprawidłowy typ działania w 'changeWallet")
            } else {
                console.log(typeof value);
                throw new Error("Nieprawidłowa liczba 'changeWallet");
            }
        }
    }
}

// const wallet = new Wallet(20);