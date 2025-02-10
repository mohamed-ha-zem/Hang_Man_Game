let letters = "abcdefghijklmnopqrstuvwxyz"
let arreyletters = Array.from(letters)
for(i=0; i<arreyletters.length; i++){
        document.getElementById("letters").innerHTML += `<p class="clickEvent">${arreyletters[i]}</p>` 
}

let words = {
    language_programing: ["HTML" ,"CSS" ,"JS" ,"PHP" ,"Python" ,"Java" ,"Gob" ,"Dart" ,"flutter" ,"C" ,"C plus plus" ,"C Sharp"],
    cars: ["BMW" ,"Mercedes" ,"Jeep" ,"Tesla" ,"Farrary" ,"Bogatati" ,],
    people: ["mohamed" ,"Ahmed" ,"Ali" ,"Youssef" ,"Yehia" ,"Qaoud" ,"Gamal" ,"Maher" ,"Ramy" ,"Kareem" ,"Ibrahim" ,"Hazem" , "Reda"] , 
    countries: ["Egypt" ,"USA" ,"saudi Arabia" ,"France" ,"libya" ,"America" ,"Italy" ,"Germany" ,"Spain" ,"Lebanon" ,"Oman" ,"Jordan" ]
    // language_programing: ["HTML" , "CSS feg" , "JS fegf" , "PHP frgr" , "Python rgrg" , "Java rgr"],
}

let allProprety = Object.keys(words)

let proprtyRandomNumber = Math.floor(Math.random() * allProprety.length)

let RandomProprety = allProprety[proprtyRandomNumber]

let names = words[RandomProprety]

let RandomNameNumber = Math.floor(Math.random() * names.length)

let RandomName = names[RandomNameNumber]

document.getElementById("word").innerHTML = RandomProprety

for(i=0; i<names.length; i++){
    if(true){
        document.getElementById("letters-guss").innerHTML += `<p>${names[i]}</p>`
    }
}
let wrongAttemps = 0;
let rightAttemps = 0;
let lettersandSpace = Array.from(RandomName)
for(i=0; i<lettersandSpace.length; i++){
    let emptySpan = document.createElement("span")
    if(RandomName[i] === " "){
        rightAttemps = 1
        emptySpan.className = "with-space"
    }
    document.getElementById("write-words").appendChild(emptySpan)
}
let spans = document.querySelectorAll(".write-words span")
let thedraw = document.getElementById("hangman-draw")


document.addEventListener("click" , (e) => {
    let theStates = false;
    if(e.target.className === "clickEvent"){
        e.target.classList.add("none")
        let theClickedLetter = e.target.innerHTML
        let thechosenword = Array.from(RandomName)
        thechosenword.forEach((letter , index) => {
            if(letter.toLowerCase() == theClickedLetter.toLowerCase()){
                theStates = true
                spans.forEach((spanletter , spanindex) => {
                    if(index === spanindex){
                        spanletter.innerHTML = e.target.innerHTML
                    }
                })
            }
        })
        if(theStates !== true){
            wrongAttemps++
            thedraw.classList.add(`wrong-${wrongAttemps}`)
            if(wrongAttemps === 7){
                endGame()
                document.getElementById("letters").classList.add("finished")
            }
        }
        if(theStates === true){
            rightAttemps++
            thedraw.classList.add(`right-${wrongAttemps}`)
            let set = new Set(lettersandSpace)
            if(rightAttemps === set.size){
                winGame()
                document.getElementById("letters").classList.add("finished")
            }
        }
    }
})

function endGame(){
    let div = document.createElement("div")
    let textDiv = document.createTextNode(`Game Over, The Word is ${RandomName}`)
    div.appendChild(textDiv)
    div.classList.add("pomp")
    document.body.appendChild(div)
}
function winGame(){
    let div = document.createElement("div")
    let textDiv = document.createTextNode(`Congratulations, The Word is ${RandomName}`)
    div.appendChild(textDiv)
    div.classList.add("win")
    document.body.appendChild(div)
}


