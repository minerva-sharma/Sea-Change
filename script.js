// var animalEduButton = $(".animal-edu");

// animalEduButton.on("click", goToEdu);

// function goToEdu(){
//   location.replace("Animal Rights/educationA.html");
// }

// $(".animal-edu").click(function(){
//   location.replace("Animal Rights/educationA.html");
// });

let navbarButton = document.querySelector("#navbar-button");
let responsiveNav = document.querySelector('.responsive-nav');

navbarButton.addEventListener('click', e => {
    responsiveNav.classList.toggle('responsive-nav-active')
});
