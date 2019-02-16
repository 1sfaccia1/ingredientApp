document.getElementById('mealSearch').addEventListener('submit', getMeals);





function getMeals(e) {
  e.preventDefault();

  var meals = document.getElementById('meals').value;

  var xhr = new XMLHttpRequest();
  xhr.open('get', 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + meals, true);


  xhr.onload = function() {
    if (this.status == 200) {
      var search = JSON.parse(this.responseText);
      var output = '';

      for (var i in search.meals) {
        output += '<div class="colum">' +
          '<div class="card">' +
          '<h1>' + search.meals[i].strMeal + '</h1>' +
          '<img src="' + search.meals[i].strMealThumb + '">' +
          '<p>' + search.meals[i].strInstructions + '</p>' +
          '</div>' +
          '</div>';
      }

      document.getElementById('meal-container').innerHTML += output;
    }
  }
  xhr.send();
}




document.body.onload = function getRandomMeal() {
  var xhr = new XMLHttpRequest();
  xhr.open('get', 'https://www.themealdb.com/api/json/v1/1/random.php', true);
  xhr.onload = function() {

    if (this.status == 200) {
      var obj = JSON.parse(this.responseText);
      var output = '';

      output += '<div id="greeting" style="background-image: url(' + obj.meals[0].strMealThumb + ');">' +
        '<div class="container">' +
        '<h1 id="greeting-logo">' + obj.meals[0].strMeal + '</h1>' +
        '<p>' + obj.meals[0].strInstructions + '</p>' +
        '</div>' +
        '</div>';

      document.getElementById('greeting-container').innerHTML = output;
    }

    console.log(this.responseText);
  }
  xhr.send();

}
