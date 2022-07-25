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