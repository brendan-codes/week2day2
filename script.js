function search(){
    var value = document.querySelector("#searchbar").value;
    alert("My search is " + value);
}

function like(id){
    var element = document.querySelector(id);
    var count = parseInt(element.innerHTML);
    element.innerHTML = count + 1;
}