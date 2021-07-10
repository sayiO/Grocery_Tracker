var myListItems = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myListItems.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myListItems[i].appendChild(span);
}