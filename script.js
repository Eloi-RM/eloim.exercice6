const textArea = document.querySelector('.text-area')
const buttonExecute = document.querySelector('.button-execute')
const paraValidDate = document.querySelector('.para-valid-date')
const paraValidPalindrome = document.querySelector('.para-valid-palindrome')
const paraFuturePalindrome = document.querySelector('.para-future-palindrome')
const buttonFuturePalindrome = document.querySelector('.button-future-palindrome')
const inputNumber = document.querySelector('.input-number')

let myDateInString = ""

function isValidDate(myDate){
    myDateInString = ""
    
    const myArray = myDate.split('')
    console.log(myArray)
    
    const slashSplitArray = myDate.split('/')
    console.log(slashSplitArray)

    if (isValidDayAndMonth(parseInt(slashSplitArray[0]), slashSplitArray[1])){
        console.log("valid day and month")
    }
    else{
        console.log("not a valid day or month")
        return false
    }

    if (myArray[2] != '/' || myArray[5] != '/'){
        console.log("not the valid format")
        return false
    }
    
    for (let i = 0; i < myArray.length; i++){
        switch (myArray[i]){
            case '0' :
            case '1' :
            case '2' :
            case '3' :    
            case '4' :
            case '5' :
            case '6' :
            case '7' :
            case '8' :
            case '9' :
                myDateInString += myArray[i]
                break
            case '/' :
                break
            default :
                console.log("not a number")
                return false
        }
    }

    if (myDateInString.length != 8){
        console.log("to long or to short")
        return false
    }
    else{
        console.log("valid date")
        return true
    }
}

function isValidDayAndMonth(myDay, myMonth){
    switch (myMonth){
        case "02" :
            console.log("good month")
            if (myDay > 0 && myDay < 30){
                console.log("good day")
                return true
            }
            break
        case "04" :
        case "06" :
        case "09" :
        case "11" :
            console.log("good month")
            if (myDay > 0 && myDay < 31){
                console.log("good day")
                return true
            }
            break
        case "01" :
        case "03" :
        case "05" :
        case "07" :
        case "08" :
        case "10" :
        case "12" :
            console.log("good month")
            if (myDay > 0 && myDay < 32){
                console.log("good day")
                return true
            }
            break
        default :
            return false
    }
}

function isPalindrome(myDate){
    const myArray = myDate.split('')
    let invertedDate = ""

    for (i = myArray.length - 1; i > -1; i--){
        invertedDate += myArray[i]
    }

    if (invertedDate == myDate){
        return true
    }
    else{
        return false
    }
}

function game(){
    if(isValidDate(textArea.value)){
        paraValidDate.innerText = "Date valide"
    }
    else{
        paraValidDate.innerText = "Pas une date valide"

    }
    
    if (isPalindrome(textArea.value)){
        paraValidPalindrome.innerText = "C'est un palindrome"
    }
    else{
        paraValidPalindrome.innerText = "Ce n'est pas un palindrome"
    }
}

buttonExecute.addEventListener('click', ()=> {
    game()
})

function future(amount){
    paraFuturePalindrome.innerHTML = ""
    let unit = 4
    let dizaine = 2
    let centaine = 0
    let millier = 2 
    
    for (let i = 0; i < amount; i++){   
        let annee = ""
        let palindromeDate = ""
        
        unit += 1
        if (unit > 2){
            unit = 0
            dizaine += 1
            if (dizaine > 9){
                dizaine = 0
                centaine += 1
                if (centaine > 1){
                    centaine = 0
                    millier += 1
                }
            }
        }
        const unitString = unit.toString()
        const dizaineString = dizaine.toString()
        const centaineString = centaine.toString()
        const millierString = millier.toString()
        
        annee = millierString + centaineString + dizaineString + unitString
        console.log(annee)
        
        const myArray = annee.split('')
        console.log(myArray)

        
        for (let j = myArray.length - 1; j > -1; j--){
            if (j == 1){
                palindromeDate += "/"
            }
            palindromeDate += myArray[j]
            console.log(myArray[j], j)
        }

        palindromeDate += "/" + annee
        console.log(palindromeDate)
        paraFuturePalindrome.innerHTML += palindromeDate + "<br/>"
    }
}

buttonFuturePalindrome.addEventListener('click', ()=> {
    future(inputNumber.value)
})