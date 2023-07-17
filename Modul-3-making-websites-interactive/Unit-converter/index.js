
const button = document.getElementById("btn-convert")

button.addEventListener("click", konvertera)

function konvertera() {
    const input = document.getElementById("inputField").value;
    const value = Number(input);

    if(value){
    // Konvertera längd från meter till feet
    const meterToFeet = 3.280
    const feet = value * meterToFeet
    const meter = value / meterToFeet
    document.getElementById("lengthResult").innerHTML = `
    ${value} meter ${feet} feet | 
    ${value} feet ${meter.toFixed(3)} meter
    `;
  
    // Konvertera volym från liter till gallon
    literToGallon = 0.264
    const gallon = value * literToGallon;
    const liter = value / literToGallon
    document.getElementById("volumeResult").innerHTML = `
    ${value} liter ${gallon} galon |
    ${value} galon ${liter.toFixed(3)} liter`;
  
    // Konvertera vikt från kilogram till pound
    kilogramToPound = 2.204
    const pound = value * kilogramToPound
    const kilogram = value / kilogramToPound
    document.getElementById("weightResult").innerHTML = `
    ${value} kilogram ${pound} pound |
    ${value} pound ${kilogram.toFixed(3)} kilogram` 
    }
  

  }
  