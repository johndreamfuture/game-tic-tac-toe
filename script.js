

let container = document.createElement("div")
container.classList.add("container")
document.body.appendChild(container)
let play
let player1 = document.createElement("button")
player1.innerText = "player-x"
player1.classList.add("player1")
let player2 = document.createElement("button")
player2.innerText = "player-o"
player2.classList.add("player2")
document.body.appendChild(player1)
document.body.appendChild(player2)
let winnerMessage = document.createElement("div")
winnerMessage.classList.add("winnerMessage")
document.body.appendChild(winnerMessage)
let h2 = document.createElement("h2")
winnerMessage.appendChild(h2)

player1.addEventListener("click", (e) => {
  play = "x"
})
player2.addEventListener("click", (e) => {
  play = "O"
})

let squares = []
let className
// let player1 = "x"
// let player2 = "o"
let play1Box = ""
let play2Box = ""
let winBox = ["012", "345", "678", "036", "147", "258", "048", "246"]
for (let i = 0; i < 9; i++) {
  squares[i] = document.createElement("div")
  squares[i].classList.add("square")
  className = `square-${i}`
  squares[i].classList.add(className)
  container.appendChild(squares[i])

  squares[i].addEventListener('click', (e) => {
    e.preventDefault()
    if (play === "x") {
      squares[i].classList.add("square-red")
      play1Box += i
      console.log(play1Box)

      for (let i = 0; i < winBox.length; i++) {
        if (isStringEqual(winBox[i], play1Box)) {
          console.log("play1 win")
          h2.innerText = "red player win!"
          return
        }
      }

      play = "o"
    } else {
      squares[i].classList.add("square-blue")
      play2Box += i
      console.log(play2Box)
      for (let i = 0; i < winBox.length; i++) {
        if (isStringEqual(winBox[i], play2Box)) {
          console.log("play2 win")
          h2.innerText = "blue player win!"
          return
        }
      }

      play = "x"
    }



  })


}
console.log(play1Box)



function isStringEqual(str1, str2) {
  let arr1 = str1.split("")

  let arr2 = str2.split("")
  arr1.sort()

  arr2.sort()

  let newStr1 = arr1.sort().toString("")
  let newStr2 = arr2.sort().toString("")
  return newStr2.includes(newStr1)


}


