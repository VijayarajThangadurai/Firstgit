var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
[...items].forEach(element =>{
    element.style.fontWeight = "bold";
})
items[2].style.backgroundColor = "green";


