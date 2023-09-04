const fahrenheitInput = document.querySelector('#fahrenheitInput');
const kelvinInput = document.querySelector('#kelvinInput');
const celsiusInput = document.querySelector('#celsiusInput');


const onChangeHandle =()=>{
    const fahrenheitValue= fahrenheitInput.value;
    


}

kelvinInput.addEventListener('change',()=>{
    celsiusInput.value= (kelvinInput.value - 273.15).toFixed(2);
    fahrenheitInput.value = (kelvinInput.value * 9/5 - 459.67).toFixed(2);
});

celsiusInput.addEventListener('change',()=>{
    fahrenheitInput.value = ((celsiusInput.value * 9/5)+32).toFixed(2);
    kelvinInput.value = celsiusInput.value + 273.15;
});

fahrenheitInput.addEventListener('change',()=>{
    celsiusInput.value=((fahrenheitInput.value - 32) * 5/9).toFixed(2);
    kelvinInput.value = ((fahrenheitInput.value + 459.67) * 5/9).toFixed(2)
});
