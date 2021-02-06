let height = window.prompt("How tall would you like the pyramid?");
function createPyramid (height) {
  
  for (var i = 1; i <=height; i++) {
    var row = "</br>";
    
    for (var j = 1; j <= height - i; j++) {
      row += '.';
    }
    for (var k = 1; k <= i; k++) {
      row += '#';
    }
      document.getElementById('pyramid').innerHTML += row
  }
}
createPyramid(height);