document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#calc');


button.addEventListener('click', () => {
    
    let weight
    const selection = document.querySelector('#planetSelect').value
    const mass = parseFloat(document.querySelector('input').value)

    if(!isNaN(mass) && selection !== 'default') {
        switch(selection) {
            case 'earth':
                weight = mass * 9.807
                break
        
            case 'mars':
                weight = mass * 3.71
                break
        
            case 'mercury':
                weight = mass * 3.7
                break
        
            case 'jupiter':
                weight = mass * 24.79
                break
        
            case 'moon':
                weight = mass * 9.807
                break
        
            case 'neptune':
                weight = mass * 9.807
                break
        
            case 'pluto':
                weight = mass * 9.807
                break
        
            case 'saturn':
                weight = mass * 9.807
                break
        
            case 'uranus':
                weight = mass * 9.807
                break
        
            case 'venus':
                weight = mass * 9.807
                break
        
            default:
                weight = 'Please enter decent value'
            
        }

    }else{
        weight = 'Please provide a decent number and planet'
    }
    let textDiv = document.querySelector('.textDiv')
    let resultContainer = document.querySelector('.resultContainer')

    let message = document.createElement('p')
    message.classList.add('messageText')
    let image = document.createElement('img')


    
    if(!isNaN(weight) && selection !== undefined) {
    
    resultContainer.innerHTML = ''
    textDiv.innerHTML = ' '

    
    message.innerText = `Weight of an object on ${selection} is: ${weight.toFixed(2)} N`;
    image.src = `assets/${selection}.png`
    

    


    resultContainer.appendChild(image)
    textDiv.appendChild(message)
    

    
    }
    

})


});