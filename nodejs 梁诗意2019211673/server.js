
const WebSocket = require('ws');
 
const server = new WebSocket.Server({port: 8000});
 
(() => {
    
    let game = null;
 
    server.on('connection', (ws, req) => {
        console.log('Connection from', req.connection.remoteAddress);
        if (game === null) {
            game = new Game();
            game.playerX = new Player(game, ws, 'X');
        } else {
            game.playerO = new Player(game, ws, 'O');
            game = null;
        }
    });
    console.log('服务启动');
})();
 
class Game {
    
    constructor() {
        this.board = Array(9).fill(null);
    }
 
    hasWinner() {
        const b = this.board;
        const wins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
        return wins.some(([x, y, z]) => b[x] != null && b[x] === b[y] && b[y] === b[z]);
    }
 
    boardFilledUp() {
        return this.board.every(square => square !== null);
    }
 
    move(location, player) {
        if (player !== this.currentPlayer) {
            throw new Error('不是你的回合');
        } else if (!player.opponent) {
            throw new Error('找不到对手');
        } else if (this.board[location] !== null) {
            throw new Error(' ');
        }
        this.board[location] = this.currentPlayer;
        this.currentPlayer = this.currentPlayer.opponent;
    }
}
 
class Player {
    constructor(game, socket, mark) {
        Object.assign(this, {game, socket, mark});
        this.send(`WELCOME ${mark}`);
        if (mark === 'X') {
            game.currentPlayer = this;
            this.send('等待你的对手');
        } else {
            this.opponent = game.playerX;
            this.opponent.opponent = this;
            this.send('对手先手');
            this.opponent.send('你的回合');
        }
 
        socket.on('message', (buffer) => {
            const command = buffer.toString('utf-8').trim();
            
            if (command === 'QUIT') {
                socket.close();
            } else if (/^MOVE \d+$/.test(command)) {
                const location = Number(command.substring(5));
                try {
                    game.move(location, this);
                    this.send(`VALID_MOVE ${location}`);
                    this.opponent.send(`OPPONENT_MOVED ${location}`);
                    if (this.game.hasWinner()) {
                        this.send('VICTORY');
                        this.opponent.send('DEFEAT');
                    } else if (this.game.boardFilledUp()) {
                        [this, this.opponent].forEach(p => p.send('TIE'));
                    }
                } catch (e) {
                    console.trace(e);
                    this.send(`MESSAGE ${e.message}`);
                }
            }
        });
 
        socket.on('close', () => {
            try {
                this.opponent.send('OTHER_PLAYER_LEFT');
            } catch (e) {
            }
        });
    }
 
    send(message) {
        try {
            this.socket.send(`${message}\n`);
        } catch (e) {
            console.error(e);
        }
    }
}
