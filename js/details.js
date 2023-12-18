const id = new URLSearchParams(window.location.search).get("id") ;

const url = `http://localhost:3000/service/`;

const servicePage = document.querySelector("#details .bottom");

axios.get(url + id).then(element => {
  servicePage.innerHTML += `
        <div class="cards">
              <img src="${element.data.image}" alt=""/>
              <h4>${element.data.name}</h4>
              <p>${element.data.description}</p>
            </div>
        `;
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
