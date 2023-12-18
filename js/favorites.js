const url = 'http://localhost:3000/favorites/';

const servicePage = document.querySelector("#details .bottom");
function getFavorites() {
    axios.get(url)
        .then(response => {
            const favorites = response.data;
            favorites.forEach(element => {
                servicePage.innerHTML += `
                    <div class="cards">
                        <img src="${element.image}" alt=""/>
                        <h4>${element.name}</h4>
                        <p>${element.description}</p>
                        <button id="delete" onclick="deleteElement(${element.id})">Delete</button>
                    </div>
                `;
            });
        })
}

getFavorites();

function deleteElement(id) {
    // console.log(id);
    // id = parseFloat(id)
    axios.delete(url + parseFloat(id))
    window.location.reload()
}


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