const form = document.querySelector('form');

// it will return empty values
// const height = parseInt(document.querySelector('#height').value)
// const weight = parseInt(document.querySelector('#weight').value)
// above use case will be wrong because we want values after the submit button get clicked

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)

    const weight = parseInt(document.querySelector('#weight').value)

    const result = document.querySelector('#results')

    if(height  === '' || height < 0 ||  isNaN(height)){
        result.innerHTML = `${height}`
    }
    else if(weight  === '' || weight < 0 ||  isNaN(weight)){
        result.innerHTML = `${weight}`
    }else{
        const bmi = (weight/((weight*height)/1000).toFixed(2))
        // show the result
        result.innerHTML=`<span>${bmi}</span>`

        
    }
})