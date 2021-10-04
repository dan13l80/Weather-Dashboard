// check local storage and initialize storage variable
var cities = JSON.parse(localStorage.getItem("cities"));
if (!cities) {
  cities = {}
} else {
  historyFunction(cities);
}
console.log(cities)