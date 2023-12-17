const url = `http://localhost:3000/service/`;

const servicePage = document.querySelector("#service .bottom");

let page = 1;
function getDataJson(){

    fetch(`http://localhost:3000/service?_page=${page}&_limit=4`)
      .then((res) => res.json())
      .then((data) =>
        data.forEach(element => {
            servicePage.innerHTML+=`
            <div class="cards">
                  <img src="${element.image}" alt=""/>
                  <h4>${element.name}</h4>
                  <p>${element.description}</p>

                  <button id="delete" onclick="deleteElement(${element.id})">Delete</button>

                  <button id="update" onclick="update(${element.id})">Update</button>
                  
                  <button id="details" onclick="viewDetails(${element.id})">ViewDetails</button>

                  <i class="bi bi-heart-fill" onclick="addFav(${element.id} , this)"></i>
                  
                </div>
            `
        })
      );
}

function deleteElement(id) {
    // console.log(id);
    // id = parseFloat(id)
    axios.delete(url + parseFloat(id))
    window.location.reload()

}
function viewDetails(id){
    window.location = `./details.html?id=${id}`
    // console.log(id);
}
function update(id){
    window.location = `./update.html?id=${id}`
}

getDataJson();
const LoadBtn = document.querySelector("#loadMore");
LoadBtn.addEventListener("click" , ()=>{
    page++;
    getDataJson();
})

// let hearts = document.querySelectorAll("#service .bottom .bi-heart-fill");


function addFav(id, heart) {
    axios.get(url + id)
        .then(res => {
            console.log(res.data);
            axios.post(`http://localhost:3000/favorites`, res.data);
            axios.post(`./favorites.html`, res.data);
            // if(heart.style.color != 'red'){
                heart.style.color = 'red'
            // }
            // else{
            //     heart.style.color = 'black';
            // }
        })
}









// axios.get(url)
// .then(element =>console.log(element.data))
