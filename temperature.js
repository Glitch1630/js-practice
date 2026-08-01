function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
const celsius = Number(process.argv[2].split("=")[1]);
const fahrenheit = celsiusToFahrenheit(celsius);
console.log(fahrenheit + "°F");
