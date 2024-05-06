
const button = document.querySelector('button')
let resultdiv = document.createElement('div')
resultdiv.id = 'result'
document.getElementById('wrapper').appendChild(resultdiv)

//eventlistner
button.addEventListener('click',displaystats)
function displaystats(){
    const input = document.getElementById('input')
    const city = input.options[input.selectedIndex].value

    let population = 0,literacyRate = 0, language = 0
    switch(city){
        case 'Bengaluru':
            population = 844367
            literacyRate = 88.71
            language = 'kannada'
            break
        case 'Chennai':
            population = 984367
            literacyRate = 85.71
            language = 'Tamil'
            break
        case 'Mumbai':
            population = 944367
            literacyRate = 87.71
            language = 'Marathi'
            break
        case 'Delhi':
            population = 834367
            literacyRate = 88.71
            language = 'Hindi'
            break
    }
    let text = `The Indian City of ${city} has a population of ${population}. Language spoken is ${language} and literacy rate is ${literacyRate} %`
    console.log(text)

    document.getElementById('result').innerHTML = text

}