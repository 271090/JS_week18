const form = document.querySelector('form');
const text = document.querySelector('.text');
const list = document.querySelector('.list');
const delet = document.querySelector('.delet');

let array = localStorage.getItem('item')?JSON.parse(localStorage.getItem('item')):[];
localStorage.setItem('item', JSON.stringify(array));
const storage = localStorage.getItem('item');


let createli = (note) => {
    let li = document.createElement('li');
    li.textContent = note;
    list.append(li);
} 

form.addEventListener('submit',function (event) {
event.preventDefault();
array.push(text.value);
localStorage.setItem(('item'),JSON.stringify(array));
createli(text.value);
text.value = '';
})

storage.forEach(element => {
    createli(element);
});

function ButtonDelete() {
    newArray = [];
  list.innerHTML = "";
};
