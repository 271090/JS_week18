
function HelloMessage() {
    let name = document.getElementById('user_name').value;

    if (name) {
        alert(`Привет, ${name}!`);
      } 
      else {
        alert('Напишите пожалуйста ваше имя!');
      }
}

