
//let errors = [];
//function checkValidity(input) {
 // let validity = input.validity;
 // if (validity.valueMissing) { errors.push('Поле' + input.placeholder + 'не заполнено');}
 // if (validity.paternMismatch) { errors.push('Пароль должен состоять из цифр и латинских букв верхнего и нижнего регистра и не более 6 символов');}
 // if (validity.rangeOverflow) {let max = getAttributeValue(input, 'max'); errors.push('Максимальное значение не может быть больше чем ' + max);}
 // if (validity.rangeUnderflow) { let min = getAttributeValue(input, 'min'); errors.push('Максимальное значение не может быть меньше чем ' + min);}
//}

//function checkAll() {
  //errors = [];
  //let inputs = document.querySelectorAll("input");

 // for (let input of inputs) {
   // checkValidity(input);
 // }
 // document.getElementById('errorsInfo').innerHTML= errors.join('. <br>');
//}

let errors = [];

function checkValidity(input) {
    let validity = input.validity;
    if (validity.valueMissing) {
        errors.push('Поле ' + input.placeholder + ' не заполнено');
    }
    if (validity.tooShort) {
        errors.push('Пароль слишком короткий');
    }

    if (validity.patternMismatch) {
        errors.push('Неверный формат заполнения поля ' + input.placeholder);
    }
}


document.querySelector(".button").addEventListener("click", function (e) {
    e.preventDefault();
    errors = [];
    let inputs = document.querySelectorAll("input");
    for (let input of inputs) {
        checkValidity(input);
    }
    let errorDiv = document.querySelector('#errorsInfo');
    errorDiv.innerHTML = errors.join('. <br>');
});


