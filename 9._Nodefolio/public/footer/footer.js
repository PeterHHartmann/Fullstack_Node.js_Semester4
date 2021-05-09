document.getElementById("year").innerHTML = "Copyright © " + new Date().getFullYear();

const navItems = document.getElementsByClassName("nav-item");

for(let i = 0; i < navItems.length; i++){
    navItems[i].addEventListener('mouseenter', event => {
        navItems[i].style.backgroundColor = "#ffffff";
    })
    navItems[i].addEventListener('mouseleave', event => {
        navItems[i].style.backgroundColor = "#46483d";
    });
}