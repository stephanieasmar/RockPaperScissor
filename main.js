function rockPaperScissors(player1, player2) {
    if (player1 == player2) {
        return 'its a tie';
    } else if (player1 == 'rock' && player2 == 'scissors') {
        return 'Player1 wins!';
    } else if (player1 == 'scissors' && player2 == 'rock') {
        return 'Player2 wins!';
    } else if (player1 == 'rock' && player2 == 'paper') {
        return 'Player2 wins!';
    } else if (player1 == 'paper' && player2 == 'rock') {s
        return 'Player1 wins!';
    } else if (player1 == 'scissors' && player2 == 'paper') {
        return 'Player1 wins!';
    } else if (player1 == 'paper' && player2 == 'scissors') {
        return 'Player2 wins!';

    } else {
        return 'Not a valid entry';
    }
}

rockPaperScissors('rock', 'paper');
rockPaperScissors('paper', 'rock');
rockPaperScissors('paper', 'scissors');
rockPaperScissors('scissors', 'paper');
rockPaperScissors('rock', 'scissors');
rockPaperScissors('scissors', 'rock')