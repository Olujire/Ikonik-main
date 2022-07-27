// NAVBAR
const openBtn = document.querySelector('.open-btn')
const closeBtn = document.querySelector('.close-btn')
const navs = document.querySelectorAll('.nav')

openBtn.addEventListener('click', ()=>{
    navs.forEach( (nav)=>{
        nav.classList.add('visible')
    })
})
closeBtn.addEventListener('click', ()=>{
    navs.forEach( (nav)=>{
        nav.classList.remove('visible')
    })
})
// FREQUENTLY ASKED QUESTIONS
const faqsbtn = document.querySelectorAll('.btn')

faqsbtn.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        btn.parentNode.classList.toggle('active')
    })
})

const images = document.querySelector('.image-container')

const img = document.querySelectorAll('.image-container .six-img')

let currentImage = 0

let interval = setInterval(run, 2000)

function run(){
    currentImage++

    changeImage()
}

function changeImage(){
    if(currentImage > img.length - 1){
        currentImage = 0
    }else if(currentImage < 0){
        currentImage = img.length - 1
    }

    images.style.transform = `translateX(${-currentImage * 100}px)`
}