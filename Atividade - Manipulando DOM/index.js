function addHouseInfo() {
  let housenumber = document.querySelector("input[name='housenumber']").value;
  let area = document.querySelector("input[name='area']").value;
  let city = document.querySelector("input[name='city']").value;
  let district = document.querySelector("input[name='district']").value;

  let newListValue = document.createElement("li");
  newListValue.innerText =
    area + "m², número " + housenumber + "(" + district + " - " + city + ")";
  let removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.innerText = "Remover";
  removeButton.setAttribute("onclick", "removeHouseInfo(this)");

  newListValue.appendChild(removeButton);

  document.getElementById("house-list").appendChild(newListValue);
}

function removeHouseInfo(button) {
  let listRemove = button.parentNode;
  document.getElementById("house-list").removeChild(listRemove);
}
