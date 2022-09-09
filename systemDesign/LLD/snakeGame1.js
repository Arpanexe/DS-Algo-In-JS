/*
Design a snake game
CellType enum -> empty,food,snake body
Cell: to store each i,j value for 2*2 array
Board: create board, generate food
Snake -> eat,move
Game -> set direction, update game, check snake has collide
*/

class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    unshift(value) {
        const node = new Node(value)
        if (this.size === 0) {
            this.head = node
            this.tail = node
            this.size++
        } else {
            node.next = this.head
            this.head.prev = node
            this.head = node
            this.size++
        }
        return node.value
    }

    pop() {
        if (this.size === 0) return undefined
        const nodeToRemove = this.tail
        if (this.size === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = nodeToRemove.prev
            this.tail.next = null
            nodeToRemove.prev = null
        }
        this.size--
        return nodeToRemove.value
    }

    getHead() {
        return this.head
    }
}

const CellType = {
    EMPTY: 0,
    FOOD: 1,
    SNAKE_BODY: 2
}

class Cell {
    #row
    #column
    #cellType
    constructor(row, column) {
        this.#row = row
        this.#column = column
        this.#cellType = CellType.EMPTY
    }

    getRow() {
        return this.#row
    }

    getColumn() {
        return this.#column
    }

    getCellType() {
        return this.#cellType
    }

    setCellType(cellType) {
        this.#cellType = cellType
    }
}

class Snake {
    #snakeBody
    constructor(initCell) {
        this.#snakeBody = new DoublyLinkedList()
        this.#snakeBody.unshift(initCell)
    }

    getSnake() {
        return this.#snakeBody
    }

    eat() {
        const head = this.#snakeBody.getHead()
        this.#snakeBody.unshift(head)
    }

    checkCollision(cell) {
        return cell.getCellType() === CellType.SNAKE_BODY ? true : false
    }

    getHead() {
        return this.#snakeBody.head.value
    }

    move(nextCell) {
        const tail = this.#snakeBody.pop()
        tail.setCellType(CellType.EMPTY)

        nextCell.setCellType(CellType.SNAKE_BODY)
        this.#snakeBody.unshift(nextCell)
        console.log(`Snake is at: ${nextCell.getRow()},${nextCell.getColumn()}`)
    }
}

class Board {
    #rowCount
    #columnCount
    #cells
    constructor(rowCount, columnCount) {
        this.#rowCount = rowCount
        this.#columnCount = columnCount
        this.#cells = []
        for (let row = 0; row < rowCount; row++) {
            this.#cells[row] = []
            for (let column = 0; column < columnCount; column++) {
                this.#cells[row][column] = new Cell(row, column)
            }
        }
    }

    getCells() {
        return this.#cells
    }

    generateFood() {
        let row, col
        while (true) {
            row = parseInt(Math.random() * this.#rowCount)
            col = parseInt(Math.random() * this.#columnCount)
            if (this.#cells[row][col] !== CellType.SNAKE_BODY)
                break
        }
        this.#cells[row][col].setCellType(CellType.FOOD)
        console.log(`Food available at ${row},${col}`)
    }

    checkBorderCollision(nextCell) {
        if (nextCell === undefined) {
            console.log(`Snake collided with borders`)
            return true
        }

        let row = nextCell.getRow()
        let column = nextCell.getColumn()
        if (row >= this.#rowCount || row < 0 || column >= this.#columnCount || column < 0) {
            console.log(`Snake collided with borders`)
            return true
        }
        else return false

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
    #isGameOver

    constructor(snake, board) {
        this.#snake = snake
        this.#board = board
        this.#isGameOver = false
        this.generateFood()
    }

    setDirection(newDirection) {
        if (this.#direction === Game.DIRECTION_LEFT && newDirection === Game.DIRECTION_RIGHT) return
        if (this.#direction === Game.DIRECTION_RIGHT && newDirection === Game.DIRECTION_LEFT) return
        if (this.#direction === Game.DIRECTION_UP && newDirection === Game.DIRECTION_DOWN) return
        if (this.#direction === Game.DIRECTION_DOWN && newDirection === Game.DIRECTION_UP) return
        this.#direction = direction
    }

    setGameOver(isGameOver) {
        this.#isGameOver = isGameOver
    }

    generateFood() {
        this.#board.generateFood()
    }

    getNextCell(currentPosition) {
        let row = currentPosition.getRow()
        let column = currentPosition.getColumn()
        if (this.#direction === Game.DIRECTION_RIGHT) {
            column++
        }
        else if (this.#direction === Game.DIRECTION_LEFT) {
            column--
        } else if (this.#direction == Game.DIRECTION_UP) {
            row--
        }
        else if (this.#direction == Game.DIRECTION_DOWN) {
            row++
        }

        let nextCell = this.#board.getCells()[row][column]
        return nextCell
    }

    update() {
        if (!this.#isGameOver) {
            if (this.#direction !== Game.DIRECTION_NONE) {
                let nextCell = this.getNextCell(this.#snake.getHead())
                if (this.#board.checkBorderCollision(nextCell) || this.#snake.checkCollision(nextCell)) {
                    this.setDirection(Game.DIRECTION_NONE)
                    this.setGameOver(true)
                } else {
                    this.#snake.move(nextCell)
                    if (nextCell.getCellType() === CellType.FOOD) {
                        this.#snake.eat()
                        this.generateFood()
                    }
                }
            }
        }
    }
}


const initPosition = new Cell(0, 0)
const board = new Board(10, 10)
const snake = new Snake(initPosition)
const game = new Game(snake, board)
game.setDirection(Game.DIRECTION_RIGHT)
game.update()
game.setDirection(Game.DIRECTION_RIGHT)
game.update()
game.setDirection(Game.DIRECTION_RIGHT)
game.update()
game.setDirection(Game.DIRECTION_RIGHT)
game.update()
game.setDirection(Game.DIRECTION_RIGHT)
game.update()
game.setDirection(Game.DIRECTION_RIGHT)
game.update()
game.setDirection(Game.DIRECTION_RIGHT)
game.update()
game.setDirection(Game.DIRECTION_RIGHT)
game.update()
