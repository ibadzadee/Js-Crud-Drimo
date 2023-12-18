let id = new URLSearchParams(window.location.search).get("id");

const url = `http://localhost:3000/service/`;

let name = document.querySelector("#name");
let description = document.querySelector("#description");
let img = document.querySelector("#img");
let form = document.querySelector("#form");
let submit = document.querySelector("#submit");
let file = document.querySelector('input[type="file"]');

fetch(url + id)
  .then((res) => res.json())
  .then((data) => {
    (img.src = data.image),
      (name.value = data.name),
      (description.value = data.description);
  });

file.addEventListener("input", () => {
  let file = e.target.files[0];
  if (file) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      img.src = reader.result;
    };
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  axios.put(url + id , {
    image: img.src,
    name: name.value,
    description: description.value,
  })
  .then(res=>{
    window.location = "../index.html"
  })

});

let mobileNav = document.querySelector("#mobile-nav")
let menu = document.querySelector("header nav .bi-list")

menu.addEventListener("click" , ()=>{
    if(mobileNav.style.display != "flex"){
        mobileNav.style.display = "flex";
    }
    else{
        mobileNav.style.display = "none";
    }
})
