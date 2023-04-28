const hamburgerBtn = document.querySelector('.hamburger');
const sideBar = document.querySelector('.sidebar');
const logo = document.querySelector('.logo');

let closeBtn = document.createElement('div');
closeBtn.textContent = "X";

closeBtn.addEventListener('click', hideSideBar);
function hideSideBar() {
    sideBar.classList.add('hidden');
    sideBar.firstElementChild.removeChild(closeBtn);
    logo.setAttribute('height', '50');
    sideBar.firstElementChild.classList.remove('center');
}

hamburgerBtn.addEventListener('click', revealSideBar);
function revealSideBar() {
    sideBar.classList.remove('hidden');
    sideBar.firstElementChild.appendChild(closeBtn);
    logo.setAttribute('height', '35');
    sideBar.firstElementChild.classList.add('center');
}