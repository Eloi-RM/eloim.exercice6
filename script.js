const textArea = document.querySelector('.text-area')
const buttonExecute = document.querySelector('.button-execute')
const paraValidDate = document.querySelector('.para-valid-date')
const paraValidPalindrome = document.querySelector('.para-valid-palindrome')
const paraFuturePalindrome = document.querySelector('.para-future-palindrome')
const buttonFuturePalindrome = document.querySelector('.button-future-palindrome')
const inputNumber = document.querySelector('.input-number')


function isValidDate(myDate){    
    const slashSplittedDate = myDate.split('/')
    console.log(slashSplittedDate)

    for (i = 0; i < slashSplittedDate.length; i++){
        if (isNaN(parseInt(slashSplittedDate[i]))){
            return false
        }
    }

    if (isValidDayAndMonth(parseInt(slashSplittedDate[0]), slashSplittedDate[1])){
        console.log("valid day and month")
    }
    else{
        console.log("not a valid day or month")
        return false
    }
    // if (myArray[2] != '/' || myArray[5] != '/'){
    //     console.log("not the valid format")
    //     return false
    // }
    // if (myDate.length != 10){
    //     console.log("to long or to short")
    //     return false
    // }
    // else{
    //     console.log("valid date")
    //     return true
    // }
    return true
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

function isPalindrome(myString){
    myString = removeSlash(myString)
    
    const splittedString = myString.split('')
    let invertedString = ""

    for (i = splittedString.length - 1; i > -1; i--){
        invertedString += splittedString[i]
    }

    if (invertedString == myString){
        return true
    }
    else{
        return false
    }
}

function removeSlash(myString){
    const splittedString = myString.split('')
    let cleanString = ""

    for (let i = 0; i < splittedString.length; i++){
    switch (splittedString[i]){
        case '/' :
            break
        default :
            cleanString += splittedString[i]
    }
    }
    return cleanString
}

function execute(){
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
    execute()
})

function displayNextPalindrome(amount){
    paraFuturePalindrome.innerHTML = ""
    let unit = 4
    let dizaine = 2 //écris en français pour la lisibilité
    let centaine = 0
    let millier = 2 
    
    for (let i = 0; i < amount; i++){   
        let year = ""
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
        
        year = millierString + centaineString + dizaineString + unitString
        
        const splittedYear = year.split('')
        
        for (let j = splittedYear.length - 1; j > -1; j--){
            if (j == 1){
                palindromeDate += "/"
            }
            palindromeDate += splittedYear[j]
        }

        palindromeDate += "/" + year
        paraFuturePalindrome.innerHTML += palindromeDate + "<br/>"
    }
}

buttonFuturePalindrome.addEventListener('click', ()=> {
    displayNextPalindrome(inputNumber.value)
})