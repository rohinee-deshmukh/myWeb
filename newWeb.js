let bt = document.querySelector('.btn-big');
bt.addEventListener('click',fun);

function fun(){
    alert("Welcome to S.R.Construction");
}


burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightNav = document.querySelector('.right-nav')
menuList = document.querySelector('.menu-list')

burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-nav-resp')
    menuList.classList.toggle('v-nav-resp')
    navbar.classList.toggle('h-nav-resp')
})