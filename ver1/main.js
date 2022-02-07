const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

//canvas size 계산
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

//block size 변경
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

let board = new Board();

function play() {
    board.reset();
    let piece = new Piece(ctx);
    piece.draw();
    board.piece = piece;
}

const moves = {
    [KEY.LEFT]: p => ({ ...p, x: p.x - 1 }),
    [KEY.RIGHT]: p => ({ ...p, x: p.x + 1 }),
    [KEY.DOWN]: p => ({ ...p, y: p.y + 1 }),
    [KEY.SPACE]: p => ({ ...p, y: p.y + 1 }),
}

document.addEventListener('keydown', event => {
    let p = moves[event.keyCode](board.piece);

    if(moves[event.keyCode]) {

        event.preventDefault();

        if(board.valid(p)) {
            board.piece.move(p);

            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

            board.piece.draw();
        }
    }

    if (event.keyCode === KEY.SPACE) {
        while (board.valid(p)) {
            board.piece.move(p);
            p = moves[KEY.DOWN] (board.piece);
        }
    }
});