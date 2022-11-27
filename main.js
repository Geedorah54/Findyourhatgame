const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';


class Field {

    constructor(array) {
        this.array = array
        this.length = array.length
        this.width = array[0].length
    }

    // finds starting point

    findStart(){
      let start = 0
      for(let i=0; i<this.array.length; i++) {
          for(let m=0; m<this.array[i].length; m++) {
            if (this.array[i][m] === '*') {
              start = [i,m]
          }
        }
      } return start
    }

    // determines location of hat
    hatLocation() {
      let end = 0
      for(let l=0; l<this.array.length; l++) {
          for(let t=0; t<this.array[l].length; t++) {
            if (this.array[l][t] === '^') {
              end = [l,t]
          }
        }
      } return end
    }


    // moves and updates location
    movement(command) {

      if (command === 'up') {
        this.next[0] -= 1
      }
      else if (command === 'down') {
        this.next[0] += 1
      }
      else if (command === 'left') {
        this.next[1] -=1
      }
      else if (command === 'right') {
        this.next[1] += 1
      }
    }

    // loops through movements and checks position
    play() {
      this.next = [0,0]
      let char = this.array[this.next[0]][this.next[1]]
      let end = this.hatLocation()
      while (!foundHat) {
      let command = prompt('Which way do you want to go? Please type either up, down, left or right.')
      this.movement(command)

      if (this.next[1] < 0 || this.next[1] >= this.width) {
        return console.log('You have left the field')
         }
      else if (this.next[0] < 0 || this.next[0] === this.length) {
        return console.log('You have left the field')
         } 
      else if (this.next.toString() === end.toString()) {
        return console.log('You found your hat!')
         }
       else if (char === '0') {
         return console.log('You fell in a hole!')
      }
      }
    }

    static newboard (height,width) {
      let boardLength = height
      let boardWidth = width
      let board = []
      let star = '*'
      let hole = '0'
      let hat = '^'

      for (let u=0; u < boardLength; u++ ) {
        let array = []
        for (let t=0; t< boardWidth; t++) {
          let rand = Math.floor(Math.random()*3)
          array.push('░')
        }
        board.push(array)
      }

      for (let q=0; q < boardLength; q++) {
        board[q][Math.floor(Math.random()*boardWidth)] = '0'
      }

      board[0][Math.floor(Math.random()*boardWidth)] = '*'
      board[boardLength-1][Math.floor(Math.random()*boardWidth)] = '^'
      return board

    }

    //prints board
    print() {
      for (let p=0; p<this.array.length; p++) {
        console.log(this.array[p])
      }
    }



}

const myField = new Field(
   [['*','░','0'],
    ['░','0','░'],
    ['░','^','░']]
    )
const foundHat = false
