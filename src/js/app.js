'use strict'

const switcher = document.querySelector('.btn')
switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')
    let className = document.body.className;
    if(className == "light-theme"){
        this.textContent = "dark"
        console.log('acurrent class name: ' + className)
    }
    else{
        this.textContent = "light"
    }
})