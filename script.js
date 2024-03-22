const menuIcon=document.getElementById("menu-icon");
const navMenu=document.getElementById("menu");
menuIcon.addEventListener("click", () => {
    if(navMenu.className == "hidden"){
navMenu.classList.remove("hidden");
    }else{
        navMenu.classList.add("hidden");
    }
});

const plus=document.getElementById('plus');
const minus=document.getElementById('minus');
const show=document.getElementById('number');

// Add Button
plus.addEventListener('click',() => {
    let current=parseInt(show.value);
   current+=1;
   show.value=current;
});

// Minus Button
minus.addEventListener('click',() => {
    let current=parseInt(show.value);
    current-=1;
    show.value=current;
});
