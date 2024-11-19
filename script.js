const textArea = document.querySelector('textarea')
const button = document.querySelector('button')
const para = document.querySelector('p')

function isValidDate(myDate){
    const myArray = myDate.split('')
    let myDateInArray = []
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
                myDateInArray += myArray[i]
                break
            case '/' :
                break
            default :
                console.log("not a number")
                return false
        }
    }
    console.log("my string = " + myDateInArray)

    if (myDateInArray.length != 8){
        console.log("to long or to short")
        return false
    }
    else{
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

button.addEventListener('click', ()=> {
    const answer = isValidDate(textArea.value)
    para.innerText = answer
})