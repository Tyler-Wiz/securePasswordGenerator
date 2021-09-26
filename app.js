///Get form //
const form = document.querySelector('#passwordGenerator')

// Get Result Display //
let passwordResult = document.querySelector('#passwordResult')

// Get Character Set // 
const passwordLength = document.querySelector('#Password_length')
const addNumbers = document.querySelector('#numbers')
const addUpperCase = document.querySelector('#uppercase')
const addLowerCase = document.querySelector('#lowercase')
const addSymbols = document.querySelector('#symbols')
const letterFirst = document.querySelector('#letterFirst')
const numberFirst = document.querySelector('#numberFirst')

// Get Warning para // 
const warning = document.querySelector('#warning')

// Get Begin With div // 
const begin =document.querySelector('#begin')
const beginNumber =document.querySelector('#beginNumber')
begin.style.display = 'none'
beginNumber.style.display = 'none'

// Content Arrays //
const lowercase = [...'abcdefghijklmnopqrstuvwxyz']
const upperCase = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']
const letters = [...lowercase, ...upperCase]
const numbers = [...'1234567890']
const symbols = [..."!”#$%&’()*+,-./:;<=>?@[]^_`{|}~"]


// Paste password to input field //
form.addEventListener('submit', (e) => {
   e.preventDefault()
   copyPassword.innerHTML = "Copy Password"
   passwordLengthValue = passwordLength.value
   includeNumbers = addNumbers.checked
   includeUpperCase = addUpperCase.checked
   includeSymbols = addSymbols.checked
   includeLetterFirst = letterFirst.checked
   includeLowerCase = addLowerCase.checked
   includeNumberFirst = numberFirst.checked
   const password = generatePassword(passwordLengthValue, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols, includeLetterFirst, includeNumberFirst)
   passwordResult.value = password
  
   // Show Copy, begin with Letter and Numbers // 

   if(includeLowerCase || includeSymbols || includeUpperCase || includeNumbers ) begin.style.display = 'flex'
   if(includeLowerCase || includeSymbols || includeUpperCase || includeNumbers ) beginNumber.style.display = 'flex'

   if(password){
     copyPassword.style.display = 'block'
   } else {
     copyPassword.style.display = 'none'
   }

   // Warning if no character set is picked//

   if(password === '') {
     warning.textContent = 'You must select at least one character set!'
   } else{
     warning.textContent = ''
   }

})


// Generate password // 
const generatePassword = (passwordLengthValue, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols, includeLetterFirst, includeNumberFirst) => {
    let randomChar = []
    if(includeLowerCase) randomChar = lowercase
    if(includeUpperCase) randomChar = randomChar.concat(upperCase)
    if(includeNumbers) randomChar = randomChar.concat(numbers)
    if(includeSymbols) randomChar = randomChar.concat(symbols)

    let passwordChar = []

     // If begin with letter is clicked //
    if(includeLetterFirst){
      for(let i=0; i < 1; i++){
        const letterFirst = letters[Math.floor(Math.random() * letters.length)]
        passwordChar.unshift(letterFirst)
      }
      passwordLengthValue = passwordLengthValue - 1
     }
      
   // If begin with Number is clicked //
     if(includeNumberFirst){
      for(let i=0; i < 1; i++){
        const number = numbers[Math.floor(Math.random() * numbers.length)]
        passwordChar.unshift(number)
      }
      passwordLengthValue = passwordLengthValue - 1
     }

    // create password //
    for(let i=0; i < passwordLengthValue; i++){
      const character = randomChar[Math.floor(Math.random() * randomChar.length)]
      passwordChar.push(character)
    }
    return passwordChar.join('')
}

// Copy The Password to Clipboard // 
  const copyPassword = document.querySelector('#copyPassword')
  copyPassword.style.display = 'none'

  copyPassword.addEventListener('click', () => {
    passwordResult.select()
    passwordResult.setSelectionRange(0, 99999); /* For mobile devices */
    navigator.clipboard.writeText(passwordResult.value)
    copyPassword.innerHTML = "Copied"
})

const usage = document.querySelector('.usage')
const usageToggle = document.querySelector('.toggle')

usageToggle.innerHTML = `<button>How to Use</button>`

usageToggle.addEventListener('click', (e) => {
  usage.classList.contains('active') ? 
  usage.classList.remove('active') : 
  usage.classList.add('active')
})




