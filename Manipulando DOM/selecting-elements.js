/*
function show(){
    let element = document.getElementByName("phones")
    console.log(element.value[1])
}
*/

function show() {
  let elements = document.querySelectorAll("div#phones input[id='phone'] ");
  console.log(elements[0].value);
  console.log(elements[1].value);
}
