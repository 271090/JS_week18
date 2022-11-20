let avas = document.querySelectorAll("#ava");
let userName = document.querySelector("#name").value; 

avas.forEach(item => { 
    item.addEventListener("click", (e) => {
        source = e.currentTarget.getAttribute("src");
        return source
    })
})


document.addEventListener("DOMContentLoaded", () => { //функция, чтобы забрать значения из хранилища
    userName = localStorage.getItem('user');
    getAllImages = localStorage.getItem('source');
})
saveInfo(); 
unsaveInfo();

function saveInfo() {
    let saveBTN = document.querySelector("#save");
    saveBTN.addEventListener("click", (e) => {
        localStorage.setItem('user', userName);
        localStorage.setItem('source', getAllImages);
    })
}

function unsaveInfo() {
    let unsaveBTN = document.querySelector("#unsave");
    unsaveBTN.addEventListener("click", (e) => {
    })
}

let comments = [];
let name = document.getElementById("newComment").value;

function addComment() {
    let name = document.getElementById("newComment").value;
    comments.push(name);
    checkSpam(name);
    generateComments();
    document.getElementById("newComment").value = '';
}

function generateComments() {
    let optionsString = "";
    for (let comment of comments) {
        optionsString += `<div><p>${comment}</p></div>`;
    }
    document.getElementById("conteiner").innerHTML = optionsString;
}
document.addEventListener("DOMContentLoaded", function () {
    generateComments();
});

function checkSpam(name) {
    let name1 = name.toLowerCase();

return name1.includes('viagra') || name1.includes('xxx');
}

