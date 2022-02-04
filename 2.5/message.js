/*
 * @Author: your name
 * @Date: 2022-02-03 15:49:26
 * @LastEditTime: 2022-02-04 16:18:35
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \2.5\tictactoe.js
 */

const section = document.querySelector('section');
const messageArea = document.querySelector('#info');
const square = location => document.querySelector(`#s${location}`);
const joinButton = document.querySelector('#join');
const leaveButton = document.querySelector('#leave');
const serverTextField = document.querySelector('#serverIp');
 
joinButton.addEventListener('click', joinGame);
leaveButton.addEventListener('click', () => leaveGame('Bye!'));
 
let socket, mark, gameOver = false;
 
addEventListener('load', () => {
    for (let i = 0; i < 9; i++) {
        const square = document.createElement('div');
        square.setAttribute('id', `s${i}`);
        square.addEventListener('click', () => {
            socket.send(`MOVE ${i}`);
        });
        section.appendChild(square);
    }
});
 
function joinGame() {
    const host = serverTextField.value || 'localhost';
    gameOver = false;
    socket = new WebSocket(`ws://${host}:8000`);
    socket.addEventListener('message', (event) => {
        processCommand(event.data);
    });
    document.querySelectorAll('section div').forEach(s => s.textContent = '');
    joinButton.style.display = 'none';
    serverTextField.style.display = 'none';
    leaveButton.style.display = 'inline';
    socket.onerror = () => leaveGame("连接错误");
}
;
 
function leaveGame(message) {
    messageArea.textContent = message || 'Game over';
    socket.send('QUIT');
    gameOver = true;
    joinButton.style.display = 'inline';
    serverTextField.style.display = 'inline';
    leaveButton.style.display = 'none';
}
;
 
function processCommand(command) {
    if (command.startsWith('WELCOME')) {
        mark = command[8];
        opponentMark = mark === 'X' ? 'O' : 'X';
    } else if (command.startsWith('VALID_MOVE')) {
        square(command.substring(11)).textContent = mark;
        messageArea.textContent = 'please wait';
    } else if (command.startsWith('OPPONENT_MOVED')) {
        square(command.substring(15)).textContent = opponentMark;
        messageArea.textContent = '你的回合';
    } else if (command.startsWith('MESSAGE')) {
        messageArea.textContent = command.substring(8);
    } else if (command.startsWith('VICTORY')) {
        leaveGame('你赢了');
    } else if (command.startsWith('DEFEAT')) {
        leaveGame('你输了');
    } else if (command.startsWith('TIE')) {
        leaveGame('Tie game so boring');
    } else if (command.startsWith('OTHER_PLAYER_LEFT')) {
        leaveGame(!gameOver ? 'Woah your opponent bailed' : '');
    }

}
