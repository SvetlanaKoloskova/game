const getSeason = () => {
    let monthNumber = Number(prompt('Введите номер месяца'));
    switch (monthNumber) {
      case 1: case 2: case 12:
        alert('Зима');
        break;
  
      case 3: case 4: case 5:
        alert('Весна');
        break;
  
      case 6: case 7: case 8:
        alert('Лето');
        break;
  
      case 9: case 10: case 11:
        alert('Осень');
        break;
  
      default:
        alert('Месяца с таким номером не существует!');
        break;
    }
  }
  
  const rememberWords = () => {
  
    let array = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    array = array.sort(() => Math.random() - 0.5);
    alert(array.join(', '));
  
    let answerFirst = String(prompt('Чему равнялся первый элемент массива?'));
    let answerLast = String(prompt('Чему равнялся последний элемент массива?'));
  
    if (answerFirst.toLowerCase() === array[0].toLowerCase() && answerLast.toLowerCase() === array[array.length - 1].toLowerCase()) {
      alert('Вы угадали оба элемента!')
    } else if (answerFirst.toLowerCase() === array[0].toLowerCase() || answerLast.toLowerCase() === array[array.length - 1].toLowerCase()) {
      alert('Вы были близки к победе!');
    } else {
      alert('Ответ неверный');
    }
  }
  
  const gameseasonButton = document.querySelector('#gameseason__button');
  gameseasonButton.addEventListener('click', getSeason);
  
  const gamerememberButton = document.querySelector('#gameremember__button');
  gamerememberButton.addEventListener('click', rememberWords);