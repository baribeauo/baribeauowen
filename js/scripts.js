var hexArray = ['#f44242','#27ce8e', '#32b4ff', '#db29c3']
var randomColor = hexArray[Math.floor(Math.random() * hexArray.length)];

$(".colourize").css("color",randomColor); 