'use strict';

const cells = document.querySelectorAll('.td');
const targetBlock = document.querySelector('#targetBlock');  // Сущности, с которыми работаю

function cellsClick() {
    targetBlock.style.display = 'block';
    targetBlock.innerHTML = this.innerHTML;
} // Помещение текста в блок из ячейки

function hideBlock() {
    this.style.display = 'none';
}  // Сокрытие блока

cells.forEach((el) => {
    el.addEventListener('click', cellsClick);
});  // Назначение событий на каждую ячейку

targetBlock.addEventListener('mouseover', hideBlock);  // Сокрытие блока при наведении
