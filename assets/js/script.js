"use strict";

// localStorage.setItem("name","Resul");

// localStorage.setItem("name","Novreste");
// localStorage.setItem("surname","Aslanzade");


// localStorage.removeItem("name")

// console.log(localStorage.getItem("name"))

// localStorage.clear()




// let names = ["Resul","Gultac","Lale","Novreste","Orxan"];


// localStorage.setItem("students",JSON.stringify(names));

// let students = JSON.parse(localStorage.getItem("students"));

// for (const stu of students) {
//     console.log(stu);
// }



// let stu1 = {
//     name:"Nihad",
//     surname:"Veliyev"
// }


// let stu2 = {
//     name:"Nicat",
//     surname:"Novruzzade"
// }


// let stu3 = {
//     name:"Anar",
//     surname:"Huseynov"
// }




//  let students = [stu1, stu2, stu3];

//  localStorage.setItem("students",JSON.stringify(students));

// let dbStudents = JSON.parse(localStorage.getItem("students"))

// localStorage.clear();
// dbStudents.forEach(stu => {
//     console.log(stu.name + " " +stu.surname)
// });


// sessionStorage.setItem("name","Gultac");



let basketBtns = document.querySelectorAll(".add-basket");

let basket = [];


if (JSON.parse(localStorage.getItem("basket")) != null) {
    basket = JSON.parse(localStorage.getItem("basket"))
}

basketBtns.forEach(btn => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();

        let productDesc = this.previousElementSibling.innerText;
        let productImg = this.parentNode.previousElementSibling.getAttribute("src");
        let productName = this.parentNode.firstElementChild.innerText;
        let productId = parseInt(this.closest(".card").getAttribute("data-id"));
        let productPrice = parseInt(this.nextElementSibling.innerText);



        let existProduct = basket.find(m => m.id == productId);

        if (existProduct != undefined) {
            existProduct.count += 1;
            existProduct.price = existProduct.count * productPrice;
        } else {
            basket.push({
                id: productId,
                price:productPrice,
                name: productName,
                description: productDesc,
                image: productImg,
                count: 1
            })
        }
        
        localStorage.setItem("basket", JSON.stringify(basket));

        getBasketCount(basket);

        Swal.fire({
            position: 'top-right',
            icon: 'success',
            title: 'Product added',
            showConfirmButton: false,
            timer: 1500
          })
    })
});


getBasketCount(basket);


function getBasketCount(arr){

    let count = 0;
    for (const item of arr) {
        count += item.count
    }
    document.querySelector("sup").innerText = count;
}


// let key = "63hdjsgdhsd";

// let date = new Date();

// let result = date.getMilliseconds();

// let endRes = key + result;

// console.log(endRes);

// function CreateUUID() {
//     return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
//       (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
//     )
//   }

//   console.log(CreateUUID())








