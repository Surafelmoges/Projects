let setingMenu = document.querySelector(".seting-menu");
let darkBtn = document.getElementById("dark-btn");

function toggleSetting(){
    setingMenu.classList.toggle('seting-menu-height');
}

darkBtn.onclick = function(){
    darkBtn.classList.toggle('dark-btn-on');
}

