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
    if (name == "") {
        return name;
    } else if (name.search(/viagra/i) > -1 || name.search(/xxx/i) > -1 || name.search(/ххх/i) > -1) {
        let censure = "***";
        let commentCens = name.replace(/viagra/ig, censure);
        let commentCens1 = commentCens.replace(/xxx/ig, censure);
        commentCens2 = commentCens1.replace(/ххх/ig, censure);
    } else {
        commentCens2 = name;
    }
}

function addElem() {
    if (commentCens2 == undefined) {
        return //останавливаю функцию, если сообщение пустое
    }
    let msg = document.createElement("div");
    msg.classList.add('msg');
    if (name.value == "") { //создаю элементы с классами для вывода сбщ
        name.value = "anonymous"
    }
    let h2 = document.createElement("h2");
    h2.classList.add('name');
    let div = document.createElement("div");
    div.classList.add('txt');
    let img = document.createElement("img");
    img.classList.add('img');
    if (source == undefined || source == "" || source == null) {
        img.src = `https://www.meme-arsenal.com/memes/94713eb79af28d2474eee4da37bcf1a5.jpg`;
    } //устанавливаю картинку по умолчанию, если не выбрана пользователем
    else { //заполняю новые элементы и вывожу на страницу
        img.src = source;
    }
    h2.innerHTML = name.value;
    div.innerHTML = commentCens2;
    msg.append(img, h2, div);
    input.append(msg);
}


function saveInfo() {
    let saveBTN = document.querySelector("#save");
    saveBTN.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.setItem('user', name.value);
        localStorage.setItem('source', source);
    })
}

function unsaveInfo() {
    let unsaveBTN = document.querySelector("#unsave");
    unsaveBTN.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.clear(); //помню, что сказали так не делать, но по-моему здесь уместно
    })
}

