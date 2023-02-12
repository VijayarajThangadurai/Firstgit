
var odd = document.querySelectorAll("li:nth-child(odd)");
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor = "green";
    
}

var even = document.querySelectorAll("li:nth-child(even)");
for(var i=0;i<even.length;i--){
    even[i].style.color = "green";
}