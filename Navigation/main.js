'use strict';

const togglerBtn = document.querySelector('.toggle-btn');
const mobileNav = document.querySelector('.mobile-nav');

togglerBtn.addEventListener('click', function(){
    if(document.querySelector('.hide')){
        mobileNav.classList.remove('hide');
    } else{
        mobileNav.classList.add('hide');
    }
});
