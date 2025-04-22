let tabLinks = document.getElementsByClassName("tab-link");
let tabContents = document.getElementsByClassName("tab-content");

function opentab(tabName){
    for (let tablink of tabLinks){
        tablink.classList.remove("active-link");
    }
    for (let tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");


}