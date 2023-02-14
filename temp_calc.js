let fahreheit = prompt('What is the current temperature in F?');
let celsius = (fahreheit-32)/1.8;
let kelvin = ((fahreheit-32)/1.8)+273.15;

alert(fahreheit + ' F is equal to ' + Math.floor(celsius) + ' Celsius and ' + Math.floor(kelvin) + ' Kelvin');