const CellType = {
    EMPTY: 0,
    FOOD: 1,
    SNAKE_NODE: 2
}

class Cell {
    #row
    #col
    #cellType

    constructor(row, col) {
        this.#row = row
        this.#col = col
        this.#cellType = CellType.EMPTY
    }

    getCellType() {
        return this.#cellType
    }

    setCellType(cellType) {
        this.#cellType = cellType
    }

    getRow() {
        return this.#row
    }

    getCol() {
        return this.#col
    }

}

class Snake {
    #snakeList = []
    #head
    constructor(initPos) {
        this.#head = initPos
        this.#head.setCellType(CellType.SNAKE_NODE)
        this.#snakeList.push(this.#head)
    }

    grow() {
        this.#snakeList.unshift(this.#head)
    }

    move(nextCell) {
        console.log(`Snake is moving to ${nextCell.getRow()} ${nextCell.getCol()}`)
        const tail = this.#snakeList.pop()
        tail.setCellType(CellType.EMPTY)

        this.#head = nextCell
        this.#head.setCellType(CellType.SNAKE_NODE)
        this.#snakeList.unshift(this.#head)
    }

    checkCrash(nextCell) {
        console.log(`Checking for crash`)
        for (const cell of this.#snakeList) {
            if (cell.getRow() === nextCell.getRow() && cell.getCol() === nextCell.getCol())
                return true
        }
        return false
    }

    getSnakeList() {
        return this.#snakeList
    }

    setSnakePartList(snakeList) {
        this.#snakeList = snakeList
    }

    getHead() {
        return this.#head
    }

    setHead(head) {
        this.#head = head
    }
}

class Board {
    #rowCount
    #colCount
    #cells
    constructor(rowCount, colCount) {
        this.#rowCount = rowCount
        this.#colCount = colCount

        this.#cells = []

        for (let row = 0 row < this.#rowCount row++) {
            this.#cells.push([])
            for (let col = 0 col < this.#colCount col++) {
                this.#cells[row][col] = new Cell(row, col)
            }
        }
    }

    getCells() {
        return this.#cells
    }

    setSells(cells) {
        this.#cells = cells
    }

    generateFood() {
        console.log(`Generating food`)
        let row, column
        while (true) {
            row = parseInt(Math.random() * this.#rowCount)
            column = parseInt(Math.random() * this.#colCount)
            if (this.#cells[row][column].getCellType() !== CellType.SNAKE_NODE)
                break
        }
        this.#cells[row][column].setCellType(CellType.FOOD)
        console.log(`Food is generated at: ${row} ${column}`)
    }
}

class Game {
    static DIRECTION_NONE = 0
    static DIRECTION_RIGHT = 1
    static DIRECTION_LEFT = -1
    static DIRECTION_UP = 2
    static DIRECTION_DOWN = -2

    #snake
    #board
    #direction
    #gameOver

    constructor(snake, board) {
        this.#snake = snake
        this.#board = board
    }

    getSnake() {
        return this.#snake
    }

    setSnake(snake) {
        this.#snake = snake
    }

    getBoard() {
        return this.#board
    }

    setBoard(board) {
        this.#board = board
    }

    isGameOver() {
        return this.#gameOver
    }

    setGameOver(gameOver) {
        this.#gameOver = gameOver
    }

    getDirection() {
        return this.#direction
    }

    setDirection(direction) {
        this.#direction = direction
    }

    getNextCell(currentPosition) {
        console.log("Going to find next cell")
        let row = currentPosition.getRow()
        let col = currentPosition.getCol()

        if (this.#direction == Game.DIRECTION_RIGHT) {
            col++
        }
        else if (this.#direction == Game.DIRECTION_LEFT) {
            col--
        }
        else if (this.#direction == Game.DIRECTION_UP) {
            row--
        }
        else if (this.#direction == Game.DIRECTION_DOWN) {
            row++
        }

        let nextCell = this.#board.getCells()[row][col]
        return nextCell
    }


    update() {
        console.log(`Going to update the game`)
        if (!this.#gameOver) {
            if (this.#direction !== Game.DIRECTION_NONE) {
                let nextCell = this.getNextCell(this.#snake.getHead())

                if (this.#snake.checkCrash(nextCell)) {
                    this.setDirection(Game.DIRECTION_NONE)
                    this.#gameOver = true
                } else {
                    this.#snake.move(nextCell)
                    if (nextCell.getCellType() === CellType.FOOD) {
                        this.#snake.grow()
                        this.#board.generateFood()
                    }
                }
            }
        }
    }
}

console.log(`Going to start game`)
const initPosition = new Cell(0, 0)
const initSnake = new Snake(initPosition)
const gameBoard = new Board(10, 10)
const newGame = new Game(initSnake, gameBoard)
newGame.setGameOver(false)
newGame.setDirection(Game.DIRECTION_RIGHT)

// We need to update the game at regular intervals,
// and accept user input from the Keyboard.

// here I have just called the different methods
// to show the functionality
for (let i = 0 i < 5 i++) {
    if (i === 2) {
        const board = newGame.getBoard()
        board.generateFood()
    }
    newGame.update()
    if (i == 3)
        newGame.setDirection(Game.DIRECTION_RIGHT)
    if (newGame.isGameOver() === true)
        break
}