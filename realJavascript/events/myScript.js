function makeString(){
    let inputName = document.getElementById('name').value
    let inputAnimal = document.getElementById('animal').value
    document.getElementById('message').innerHTML = 'Hello ' + inputName + ". Don't you wish you were a "+inputAnimal +"?"
}

function changeColor(){

    document.getElementById('name').style.backgroundColor = "red"
    document.getElementById('animal').style.backgroundColor = getRandomColor()
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }