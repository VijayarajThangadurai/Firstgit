var itemList = document.querySelector("#items");
// //parentelement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentElement.parentElement.parentElement);

// //childnodes
// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor="yellow";

// //firstchild
// console.log(itemList.firstchild);

// //firstelementchild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "hello 1";

// // lastchild
// console.log(itemList.lastChild);

// //lastElementchild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "hello 4";

//nextsibling
// console.log(itemList.nextsibling);

// //nextelementsibling
// console.log(itemList.previousElementSibling);

// //previouselementsibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color =" green";

//createelement

//create div
var  newDiv = document.createElement("div");
//add class
 newDiv.className = "hello";
//add id
newDiv.id= "hello1";
//add attr
newDiv.setAttribute("tittle","hello Div");
//create text node
var newDivText = document.createTextNode("hello world");
//add text node
var newDivText = document.createTextNode("hello world");
//add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector("header h1");
console.log(newDiv);
newDiv.style.fontSize = "30px";
container.insertBefore(newDiv,h1);

var li = document.createElement("span");
li.innerText= "hello world";
var item1 = document.querySelector(".list-group-item");
var items = document.querySelector("#items");
li.style.fontSize = "20px";
items.insertBefore(li,item1);


