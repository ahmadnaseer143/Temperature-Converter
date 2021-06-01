const celsiusInput=document.querySelector('#celcius > input');
const farenheitInput=document.querySelector('#farenheit > input');
const kelvinInput=document.querySelector('#kelvin > input');

function roundNum(num){
    return Math.round(num*100)/100;
}

function celsiusConversion(){
    const cTemp=parseFloat(celsiusInput.value);
    const fTemp=(cTemp*(9/5))+32;
    const kTemp=cTemp + 273.15;
    farenheitInput.value=roundNum(fTemp);
    kelvinInput.value=roundNum(kTemp);
}
function farenheitConversion(){
    const fTemp=parseFloat(farenheitInput.value);
    const cTemp=(fTemp-32)*(5/9);
    const kTemp=(fTemp+459.67) * (5/9);
    celsiusInput.value=roundNum(cTemp);
    kelvinInput.value=roundNum(kTemp);
}
function kelvinConversion(){
    const kTemp=parseFloat(kelvinInput.value);
    const cTemp=kTemp - 273.15;
    const fTemp= (9/5)*(kTemp-273)+32;
    celsiusInput.value=roundNum(cTemp);
    farenheitInput.value=roundNum(fTemp);
}
function main(){
    celsiusInput.addEventListener('input',celsiusConversion);
    farenheitInput.addEventListener('input',farenheitConversion);
    kelvinInput.addEventListener('input',kelvinConversion);
}
main();








