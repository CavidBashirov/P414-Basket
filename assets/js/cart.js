"use strict";


let tablebody = document.querySelector("tbody");
let productAlert = document.querySelector(".alert-warning");

let products = JSON.parse(localStorage.getItem("basket"));

if (products != null) {
    products.forEach(product => {

        tablebody.innerHTML += `<tr data-id="${product.id}">
        <td><img src="${product.image}" style="width: 100px; height: 100px;" alt=""></td>
        <td>${product.name}</td>
        <td>${product.description}</td>
        <td>${product.count}</td>
        <td>${product.price} $</td>
        <td><button class="btn btn-danger btn-sm">Remove</button></td>
    </tr>`

    });
} else {
    tablebody.parentNode.classList.add("d-none");
    productAlert.classList.remove("d-none");
}

if (products != null) {
    getBasketCount(products);
}

function getBasketCount(arr) {
    let count = 0;
    for (const item of arr) {
        count += item.count
    }
    document.querySelector("sup").innerText = count;
}

function getAllPrice() {
    let result = JSON.parse(localStorage.getItem("basket"));
    if(result != null){
        let sum = 0;
        for (const item of result) {
            sum += item.price
        }
    
        document.querySelector(".total-result").innerText = sum;
    }
    
}

getAllPrice();

let removeBtns = document.querySelectorAll(".btn-sm");

removeBtns.forEach(btn => {

    btn.addEventListener("click",function(){

       let id = parseInt(this.parentNode.parentNode.getAttribute("data-id"));

       products = JSON.parse(localStorage.getItem("basket"));

       let result = products.filter(m=>m.id != id);
       
       localStorage.setItem("basket",JSON.stringify(result));

       this.parentNode.parentNode.remove();

       getAllPrice();
       getBasketCount(result);
    })
});



