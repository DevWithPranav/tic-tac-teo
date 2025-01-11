const btnArray = Array.from(document.querySelectorAll('.btn'));
const winArray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let player = 'O';

btnArray.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.textContent === '') {
            btn.textContent = player;
            setTimeout(() => {
                if (checkWin()) {
                    alert(`${player} wins!`);
                    btnArray.forEach(btn => btn.textContent = ''); 
                } else {
                    player = (player === 'X') ? 'O' : 'X'; 
                }
            }, 100);
        }
    });
});

document.getElementsByClassName('btn-submit')[0].addEventListener('click', () => {
    btnArray.forEach(btn => btn.textContent = ''); 
    player = 'O'; 
});

const checkWin = () => {
    for (let pattern of winArray) {
        let pos1 = btnArray[pattern[0]].textContent;
        let pos2 = btnArray[pattern[1]].textContent;
        let pos3 = btnArray[pattern[2]].textContent;

        if (pos1 === pos2 && pos2 === pos3 && pos1 !== '') {
            return true;
        }
    }
    return false;
};
