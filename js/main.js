const tabitem = document.querySelectorAll('.tab-item');
const tabcontentitem = document.querySelectorAll('.tab-content-item');

function selectitem(e) {
    removeshow();
    const tabcontent = document.querySelector(`#${this.id}-content`);
    tabcontent.classList.add('show'); 
}
function removeshow() {
    tabcontentitem.forEach(item => item.classList.remove('show'));
}
tabitem.forEach(item => item.addEventListener('click', selectitem));