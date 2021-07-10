"use strict";

var myListItems = document.getElementsByTagName("li");
var i;

for (i = 0; i < myListItems.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\xD7");
  span.className = "close";
  span.appendChild(txt);
  myListItems[i].appendChild(span);
}

function newItemsAdded() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myList").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  if (inputValue === " ") {
    alert("enter item");
  } else {
    document.getElementById("myul").appendChild(li);
  }

  document.getElementById("myList").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\xD7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

var close = document.getElementsByClassName("close");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('done');
  }
});